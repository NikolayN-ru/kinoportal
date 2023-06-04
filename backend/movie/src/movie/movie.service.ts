import {HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Movie} from "./entity/movie.entity";
import {InjectRepository} from '@nestjs/typeorm';
import {Between, In, MoreThan, Repository} from 'typeorm';
import {Review} from "./entity/review.entity";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Comment} from "./entity/comment.entity"
import {CreateCommentDto} from "./dto/create-comment.dto";
import {CreateMovieDto} from "./dto/create-movie.dto";
import {ClientProxy} from "@nestjs/microservices";
import {Genre} from "../genre/entity/genre.entity";
import {Country} from "../country/entity/country.entity";
import path from "path";

@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>,
                @InjectRepository(Review) private reviewRepository: Repository<Review>,
                @InjectRepository(Genre) private genreRepository: Repository<Genre>,
                @InjectRepository(Country) private countryRepository: Repository<Country>,
                @Inject('Photo') private clientPhoto: ClientProxy,
                @Inject('Actor') private clientActor: ClientProxy) {}

    async getMain() {
        try {
            const movies = await this.movieRepository.find({
                take: 100,
                relations: {
                    genres: true,
                    countries: true
                }
            })
            // добавить вывод картинок
            return movies
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getAllMovies() {
        try {
            return this.movieRepository.createQueryBuilder("movie")
                .leftJoinAndSelect("movie.genre", "genre")
                .leftJoinAndSelect("movie.countries", "countries")
                .getMany()
            //добавить вывод картинок
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getMovieWithFilter(genre: string, year: string, country: string, rating: number, votes: number, actor: string, director: string, sort: string) {
        try {
            let genres, years, countries, movieIdForActor;
            let queryWhere = [];


            if(actor){
                await this.clientActor.send('filt-film-actor',{actorId: actor, roleName: 'Актер'}).toPromise()
                    .then(result => movieIdForActor = result);

                queryWhere.push(`movie.id IN (${movieIdForActor})`);
            }

            if(director){
                await this.clientActor.send('filt-film-actor',{actorId: director, roleName: 'Режиссёр'}).toPromise()
                    .then(result => movieIdForActor = result);

                queryWhere.push(`movie.id IN (${movieIdForActor})`);
            }

            if(genre) {
                genres = genre.split(' ').map(genre => `'${genre}'`);

                queryWhere.push(`genres.genre IN (${genres})`)
            }

            if(year) {
                years = year.split('-').map(function (item) {
                    return parseInt(item);
                });

                switch (years.length) {
                    case 1:
                        queryWhere.push(`movie.year = ${years[0]}`)
                        break;
                    case 2:
                        queryWhere.push(`movie.year BETWEEN ${years[0]} AND ${years[1]}`)
                        break;
                }
            }

            if(country) {
                countries = country.split(' ').map(country => `'${country}'`);

                queryWhere.push(`countries.country IN (${countries})`)
            }

            if(rating) {
                queryWhere.push(`movie.rating > ${rating}`);
            }

            if(votes) {
                queryWhere.push(`movie.votes > ${votes}`);
            }

            let movies;
            const queryWhereJoined = queryWhere.join(' AND ');

            if(sort) {
                movies = await this.movieRepository.createQueryBuilder('movie')
                    .leftJoinAndSelect('movie.countries', 'countries')
                    .leftJoinAndSelect('movie.genres', 'genres')
                    .where(queryWhereJoined)
                    .orderBy('movie.' + sort, sort === 'title' ? "ASC" : "DESC")
                    .getMany();
            } else {
                movies = await this.movieRepository.createQueryBuilder('movie')
                    .leftJoinAndSelect('movie.countries', 'countries')
                    .leftJoinAndSelect('movie.genres', 'genres')
                    .where(queryWhereJoined)
                    .getMany();
            }
            // добавить вывод картинок
            if(!movies) return HttpStatus.NOT_FOUND;
            return movies
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getMovie(id: number) {
        try {
            const movie = await this.movieRepository.findOne({
                where: {
                   id: id
                },
                relations : {
                    genres: true,
                    reviews: true,
                    countries: true
                }
            });

            if(!movie) return HttpStatus.NOT_FOUND;

            let movieInfo;
            await this.getFilesForMovies([movie],'movie').then(res => movieInfo = res[0]);
            return movieInfo;
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getFilesForMovies(movies: Array<Movie>, assenceTable: string){
        try{
            const movieId = movies.map(item => item.id);
            const files = await this.clientPhoto.send('get.files',{arrActors: movieId, assenceTable: assenceTable}).toPromise();
            if(files.length === 0) {
                return movies
            }
            const otv = movies.map(movie => ({...movie, dopContent: files.map(item => item.filename)}));
            return otv
        }
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getMovies(moviesIds: Array<number>) {
        try {
            const movie = await this.movieRepository.createQueryBuilder()
                .select('movie')
                .from(Movie, "movie")
                .where("movie.id in (:...moviesIds)", {moviesIds})
                .getMany();
            if(movie.length===0) {
                return [];
            }

            return movie;

        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getReviews(id: number) {
        try {
            const movie = await this.movieRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    reviews: true
                }
            });
            if(!movie) return HttpStatus.NOT_FOUND;
            return movie.reviews
        } catch (e) {
            return e.message;
        }
    }

    async createReview(id: number, dto: CreateReviewDto) {
        try {
            const movie = await this.movieRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    reviews: true
                }
            });
            if(!movie) return HttpStatus.NOT_FOUND;

            const review = new Review();
            review.data = dto.data;
            review.like = dto.like;
            review.description = dto.description;
            review.title = dto.title;
            review.userName = dto.userName;

            movie.reviews.push(review)
            await this.movieRepository.save(movie);

            return movie.reviews;
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async getReviewWithComments(id: number) {
        try {
            const review = await this.reviewRepository.findOne({
                where: {
                    id: id
                },
                relations:{
                    comments: true
                }
            });
            if(!review) return HttpStatus.NOT_FOUND
            return review;
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async createComment(dto: CreateCommentDto) {
        try {
            const review = await this.reviewRepository.findOne({
                where: {
                    id: dto.reviedId
                },
                relations: {
                    comments: true
                }
            });
            if(!review) return HttpStatus.NOT_FOUND;

            const comment = new Comment();
            comment.text = dto.comment;
            comment.parentId = dto.parentId;

            review.comments.push(comment);
            await this.reviewRepository.save(review);

            return review;
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async createMovie(dto: CreateMovieDto, images: any) {
        try {
            const genres = await this.checkGenres(dto.genres);
            const countries = await this.checkCountries(dto.countries);

            const movie = new Movie();
            movie.title = dto.title;
            movie.titleEng = dto.titleEng;
            movie.year = dto.year;
            movie.quality = dto.quality;
            movie.rating = dto.rating;
            movie.description = dto.description;
            movie.genres = genres;
            movie.countries = countries;
            movie.votes = dto.votes;

            if(images.length !== 0){
                movie.imgVideo = await this.clientPhoto.send('create.file',images[0]).toPromise();
            }

            await this.movieRepository.save(movie);
            let actors;
            let directors;
            if(dto.actors.length !== 0){
                actors = await this.clientActor.send('create.film',{filmId: movie.id, actorsId: dto.actors, role: 'Актер'}).toPromise();
            }
            if(dto.directors.length !== 0){
                directors = await this.clientActor.send('create.film',{filmId: movie.id, actorsId: dto.directors, role: 'Режиссёр'}).toPromise();
            }
            let dopContent = images.slice();
            dopContent.shift();
            if(dopContent !== 0){
                await this.clientPhoto.send('add.file',{assenceTable: 'movie', assenceId: movie.id, files: dopContent}).toPromise();
            }

            return movie
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async deleteMovie(id: number) {
        try {
            const movie = await this.movieRepository.findOneBy({
                id: id
            });

            if(!movie) return HttpStatus.NOT_FOUND;

            await this.movieRepository.delete(movie);

            await this.clientPhoto.send('delete.main.file',{main: [movie.imgVideo], id: movie.id}).toPromise();
            await this.clientActor.send('delete.film',movie.id).toPromise();

            return 'Фильм удален';
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async updateMovie(id: number, title: string) {
        try {
            const movie = await this.movieRepository.findOneBy({
                id: id
            });
            if(!movie) return HttpStatus.NOT_FOUND;

            movie.title = title;
            await this.movieRepository.save(movie);

            return movie;
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    private async checkGenres(genres: string) {
        let arrayGenres = genres.split(', ');

        const genresFromDB = await this.genreRepository.find();

        return arrayGenres.map(function (genre) {
            let newGenre = genresFromDB.find(genreDB => genreDB.genre === genre);

            if (!newGenre) {
                newGenre = new Genre();
                newGenre.genre = genre;
            }

            return newGenre
        });
    }

    private async checkCountries(countries: string) {
        const arrayCountries = countries.split(', ');

        const countriesFromDB = await this.countryRepository.find();

        return arrayCountries.map(function (country) {
            let newCountry = countriesFromDB.find(countryDB => countryDB.country === country);

            if(!newCountry) {
                newCountry = new Country();
                newCountry.country = country;
            }

            return newCountry
        })
    }

    private async getFullFileName(mas: Array<any>){
        return mas.map(item => {
            return {...item,
                imgVideo: path.resolve(__dirname, '../../../files-sistem/image',`${item.imgVideo}`)
            }
        });
    }
}
