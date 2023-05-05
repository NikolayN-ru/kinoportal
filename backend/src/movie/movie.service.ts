import {HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Movie} from "./entity/movie.entity";
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, In, Between, MoreThan} from 'typeorm';
import {Review} from "./entity/review.entity";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Comment} from "./entity/comment.entity"
import {CreateCommentDto} from "./dto/create-comment.dto";
import {CreateMovieDto} from "./dto/create-movie.dto";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>,
                @InjectRepository(Review) private reviewRepository: Repository<Review>,
                @Inject('Photo') private clientPhoto: ClientProxy) {}

    async getMain() {
        try {
            const movies = await this.movieRepository.find({
                take: 100
            })
            return movies
        } catch (e) {
            return e.message;
        }

    }

    async getMovieWithFilter(genre: string, year: string, country: string, rating: number) {
        try {
            let genres, years, countries;
            const param = {
                genres: undefined,
                countries: undefined,
                year: undefined,
                ratingIvi: undefined
            };

            if(genre) {
                genres = genre.split(' ');

                param.genres = {
                        genre: In(genres)
                }
            }

            if(year) {
                years = year.split('-').map(function (item) {
                    return parseInt(item);
                });

                switch (years.length) {
                    case 1:
                        param.year = years[0]
                        break;
                    case 2:
                        param.year = Between(years[0], years[1])
                        break;
                }
            }

            if(country) {
                countries = country.split(' ');

                param.countries = {
                    country: In(countries)
                }
            }

            if(rating) {
                param.ratingIvi = {
                    rating: MoreThan(rating)
                }
            }

            const movies = await this.movieRepository.findBy(param);

            return movies
        } catch (e) {
            return e.message;
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
            if(movie) return movie;
            return HttpStatus.NOT_FOUND;
        } catch (e) {
            return e.message;
        }
    }

    async getMovies(moviesIds: Array<number>) {
        try {
            const movie = await this.movieRepository.createQueryBuilder()
                .select('movie')
                .from(Movie, "movie")
                .where("movie.id in (:...moviesIds)", {moviesIds})
                .getMany();
            if(!movie) {
                return HttpStatus.NOT_FOUND;
            }

            return this.getFilesForMovies(movie,'movie-main');

        } catch (e) {
            return e.message;
        }

    }

    async getFilesForMovies(movies: Array<Movie>, assenceTable: string){
        try{
            const movieId = await movies.map(item => item.id);
            const files = await this.clientPhoto.send('get.files',{arrActors: movieId, assenceTable: assenceTable}).toPromise();
            if(!files) {
                return movies
            }
            const otv = movies.map(movie => ({...movie, ...files.find(file => file.id === movie.id)}));
            return otv
        }
        catch(e){
            return e.message;
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
            const reviews = movie.reviews;
            return reviews
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
            return e.message;
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
            return e.message;
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
            comment.text = dto.comment

            review.comments.push(comment);
            await this.reviewRepository.save(review);

            return review;
        } catch (e) {
            return e.message;
        }
    }

    async createMovie(dto: CreateMovieDto) {
        try {

        } catch (e) {

        }
    }

    async deleteMovie(id: number) {
        try {

        } catch (e) {
            return e.message;
        }
    }

    async updateMovie(id: number, dto) {
        try {

        } catch (e) {

        }
    }
}
