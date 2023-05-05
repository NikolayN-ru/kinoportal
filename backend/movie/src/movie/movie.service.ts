import {HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Movie} from "./entity/movie.entity";
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, In, Between} from 'typeorm';
import {Review} from "./entity/review.entity";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Comment} from "./entity/comment.entity"
import {CreateCommentDto} from "./dto/create-comment";
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>,
                @InjectRepository(Review) private reviewRepository: Repository<Review>,
                @InjectRepository(Comment) private commentRepository: Repository<Comment>,
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

    async getMovieWithFilter(genre: string, year: string, country: string) {
        try {
            let genres, years, countries;
            if(genre) {
                genres = genre.split(' ');
            }
            if(year) {
                years = year.split('-').map(function (item) {
                    return parseInt(item);
                });
            }
            if(country) {
                countries = country.split(' ');
            }
            let movies = [];
            switch (years.length) {
                case 1:
                    if(countries) {
                        if(genres) {
                            movies = await this.movieRepository.findBy({
                                genres: {
                                    genre: In(genres)
                                },
                                countries: {
                                    country: In(countries)
                                },
                                year: years[0]
                            })
                        } else {
                            movies = await this.movieRepository.findBy({
                                countries: {
                                    country: In(countries)
                                },
                                year: years[0]
                            })
                        }
                    } else {
                        if(genres) {
                            movies = await this.movieRepository.findBy({
                                genres: {
                                    genre: In(genres)
                                },
                                year: years[0]
                            })
                        } else {
                            movies = await this.movieRepository.findBy({
                                year: years[0]
                            })
                        }
                    }
                    break;
                case 2:
                    if(countries) {
                        if(genres) {
                            movies = await this.movieRepository.findBy({
                                genres: {
                                    genre: In(genres)
                                },
                                countries: {
                                    country: In(countries)
                                },
                                year: Between(years[0], years[1])
                            })
                        } else {
                            movies = await this.movieRepository.findBy({
                                countries: {
                                    country: In(countries)
                                },
                                year:  Between(years[0], years[1])
                            })
                        }
                    } else {
                        if(genres) {
                            movies = await this.movieRepository.findBy({
                                genres: {
                                    genre: In(genres)
                                },
                                year: Between(years[0], years[1])
                            })
                        } else {
                            movies = await this.movieRepository.findBy({
                                year:  Between(years[0], years[1])
                            })
                        }
                    }
                    break;
                default:
                    if(countries) {
                        if(genres) {
                            movies = await this.movieRepository.findBy({
                                genres: {
                                    genre: In(genres)
                                },
                                countries: {
                                    country: In(countries)
                                },
                            })
                        } else {
                            movies = await this.movieRepository.findBy({
                                countries: {
                                    country: In(countries)
                                },
                            })
                        }
                    } else {
                        if(genres) {
                            movies = await this.movieRepository.findBy({
                                genres: {
                                    genre: In(genres)
                                },
                            })
                        }
                    }
                    break;
            }

            return movies
        } catch (e) {
            return e.message;
        }
    }

    async getMovie(id: number) {
        try {
            const movie = await this.movieRepository.findOneBy({id: id});
            if(!movie) return HttpStatus.NOT_FOUND;
            let movieInfo;
            await this.getFilesForMovies([movie],'movie-main').then(res => movieInfo = res[0]);
            return movieInfo
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
            const movie = await this.getMovie(id);
            if(movie === HttpStatus.NOT_FOUND) return HttpStatus.NOT_FOUND
            const reviews = await this.reviewRepository.findBy({movie:{
                    id: id
                }});
            return reviews
        } catch (e) {
            return e.message;
        }

    }

    async createReview(id: number, dto: CreateReviewDto) {
        try {
            const movie = await this.movieRepository.findOneBy({id: id});
            const review = await this.reviewRepository.save({...dto, movie});
            return review;
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

            const comment = await this.commentRepository.create({
                id: dto.reviedId,
                text: dto.comment,
                review: review
            });
            await this.reviewRepository.save(comment);

            review.comments.push(comment);
            await this.reviewRepository.save(review);

            return review;
        } catch (e) {
            return e.message;
        }
    }
}
