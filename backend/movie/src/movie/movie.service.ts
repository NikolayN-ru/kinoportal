import {HttpStatus, Injectable} from '@nestjs/common';
import {Movie} from "./entity/movie.entity";
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, In, ArrayContainedBy, ArrayContains, ArrayOverlap} from 'typeorm';
import {Review} from "./entity/review.entity";
import {CreateReviewDto} from "./dto/create-review.dto";

@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>,
                @InjectRepository(Review) private reviewRepository: Repository<Review>) {}

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

            console.log(genres);

            const movies = await this.movieRepository.findBy({
                genre: ArrayOverlap(genres),
            })

            // const movies = await this.movieRepository.createQueryBuilder("movie")
            //     .select()
            //     .where('ARRAYOVERLAP(genre, :gen) = true', {gen: ['1']})
            //     .getMany()


            return movies
        } catch (e) {
            return e.message;
        }
    }

    async getMovie(id: number) {
        try {
            const movie = await this.movieRepository.findOneBy({id: id});
            if(movie) return movie;
            return HttpStatus.NOT_FOUND;
        } catch (e) {
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
}
