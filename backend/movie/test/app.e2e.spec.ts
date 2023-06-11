import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app/app.module';
import {ClientProxy, ClientsModule, Transport} from "@nestjs/microservices";

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let client: ClientProxy;

  const testReview = {
    title: 'title',
    userName: 'name',
    data: 1,
    like: 0,
    description: 'description',
    id: undefined
  };

  const genre = {
    genre: 'name',
    id: undefined
  };

  const country = {
    country: 'name',
    id: undefined
  };

  const testComment = {
    text: 'name',
    id: undefined,
    parentId: 0,
    reviedId: undefined
  };

  const movie = {
    title: 'movie',
    titleEng: 'movieEng',
    year: 1000,
    quality: 'hd',
    rating: 8,
    votes: 500,
    time: 60,
    description: 'description',
    genres: 'genres',
    countries: 'countries',
    actors: '',
    directors: '',
    image: '',
    id: undefined
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
          AppModule,
          ClientsModule.register([
            {
              name: 'Movie',
              transport: Transport.RMQ,
              options: {
                urls: [process.env.rabbitMqp],
                queue: 'movie-queue',
                queueOptions: {
                  durable: false
                },
              },
            },
          ])
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.connectMicroservice({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.rabbitMq],
        queue: 'movie-queue',
        queueOptions: {
          durable: false
        }
      }
    });

    await app.startAllMicroservices();
    await app.init();

    client = app.get('Movie');
    await client.connect();
  });

  afterAll(async () => {
    await client.close();
    await app.close();
  });

  describe('COUNTRY', () => {
    it('delete incorrect id', async () => {
      const result = await client.send('delete.country', -100).toPromise();
      expect(result).toBe(404);
    });

    it('create country', async () => {
      const result = await client.send('create.country', country.country).toPromise();
      expect(result).toEqual({
        country: country.country,
        id:  expect.any(Number)
      });
      country.id = result.id;
    });

    it('create duplicate country', async () => {
      const result  = await client.send('create.country', country.country).toPromise();
      expect(result).toStrictEqual('Такая страна уже есть');
    });

    it('update duplicate country', async () => {
      const result  = await client.send('update.country', {country: country.country, id: 2}).toPromise();
      expect(result).toStrictEqual('Такая страна уже есть');
    });

    it('update incorrect id country', async () => {
      const result  = await client.send('update.country', {country: 'test', id: -100}).toPromise();
      expect(result).toBe(404);
    });

    it('update  country', async () => {
      const result  = await client.send('update.country', {country: 'name2', id: country.id}).toPromise();
      expect(result).toEqual({
        country: 'name2',
        id:  country.id
      });
    });

    it('delete correct id country', async () => {
      const result = await client.send('delete.country', country.id).toPromise();
      expect(result).toStrictEqual('Страна уделена');
    });
  });


  describe('GENRE', () => {
    it('delete incorrect id genre', async () => {
      const result = await client.send('delete.genre', -100).toPromise();
      expect(result).toBe(404);
    });

    it('create genre', async () => {
      const result = await client.send('create.genre', genre.genre).toPromise();
      expect(result).toEqual({
        genre: genre.genre,
        id:  expect.any(Number)
      });
      genre.id = result.id;
    });

    it('create duplicate genre', async () => {
      const result  = await client.send('create.genre', genre.genre).toPromise();
      expect(result).toStrictEqual('Такой жанр уже есть');
    });

    it('update duplicate genre', async () => {
      const result  = await client.send('update.genre', {genre: genre.genre, id: 2}).toPromise();
      expect(result).toStrictEqual('Такой жанр уже есть');
    });

    it('update incorrect id genre', async () => {
      const result  = await client.send('update.genre', {genre: 'test', id: -100}).toPromise();
      expect(result).toBe(404);
    });

    it('update  genre', async () => {
      const result  = await client.send('update.genre', {genre: 'name2', id: genre.id}).toPromise();
      expect(result).toEqual({
        genre: 'name2',
        id:  genre.id
      });
    });

    it('delete correct id genre', async () => {
      const result = await client.send('delete.genre', genre.id).toPromise();
      expect(result).toStrictEqual('Жанр удален');
    });
  });

  describe('MOVIE', () => {
    it('delete incorrect id movie', async () => {
      const result = await client.send('delete.movie', -100).toPromise();
      expect(result.message).toBe("Такого фильма нет");
    });

    it('create movie', async () => {
      const result = await client.send('create.movie', movie).toPromise();


      expect(result).toStrictEqual({
        id: expect.any(Number),
        countries: expect.any(Array),
        genres: expect.any(Array),
        description: movie.description,
        imgVideo: expect.any(String),
        quality: movie.quality,
        rating: movie.rating,
        time: movie.time,
        title: movie.title,
        titleEng: movie.titleEng,
        votes: movie.votes,
        year: movie.year
      });
      movie.id = result.id;
    });

    it('update incorrect id movie', async () => {
      const result  = await client.send('update.movie', {title: 'test', id: -100}).toPromise();
      expect(result.message).toBe("Такого фильма нет");
    });

    it('update  movie', async () => {
      const result  = await client.send('update.movie', {title: 'movie2', titleEng: 'movie2', id: movie.id}).toPromise();

      expect(result.title).toStrictEqual('movie2');
      expect(result.titleEng).toStrictEqual('movie2');
    });

    it('delete correct id movie', async () => {
      const result = await client.send('delete.movie', movie.id).toPromise();

      expect(result).toStrictEqual('Фильм удален');
    });

    it('incorrect id ', async () => {
      const response = await client.send('get.movie', -100).toPromise();

      expect(response.message).toStrictEqual("Такого фильма нет");
    });

    it('incorrect id ', async () => {
      const response = await client.send('get.reviews', -100).toPromise();

      expect(response).toStrictEqual("Такого фильма нет");
    });

    it('incorrect id ', async () => {
      const response = await client.send('create.review', {id: -100, dto: testReview}).toPromise();

      expect(response.message).toStrictEqual("Такого фильма нет");
    });

    it('create review', async () => {
      const response = await client.send('create.review', {id: 1, dto: testReview}).toPromise();
      const review = response.find((review) => review.title === testReview.title && review.userName === testReview.userName && review.description === testReview.description);

      expect(review).toStrictEqual({
        ...testReview,
        id: expect.any(Number)
      });
      testReview.id = review.id;
    });

    it('create comment with incorrect reviewId', async () => {
      testComment.reviedId = -100;
      const result = await client.send('create.comment', testComment).toPromise();
      
      expect(result.message).toStrictEqual('Такого ревью нет');
    });

    it('create comment with correct reviewId', async () => {
      testComment.reviedId = testReview.id;
      const result = await client.send('create.comment', testComment).toPromise();

      const comment = result.comments.find((comment) => comment.text === testComment.text && comment.parentId === testComment.parentId);

      expect(comment).toStrictEqual({
        parentId: testComment.parentId,
        text: testComment.text,
        id: expect.any(Number)
      });
    });

    it('movie/filters?genre (GET) ', async () => {
      const genreFilter = 'genre';
      const response = await client.send('get.movie.with.filter', {genre: genreFilter}).toPromise();

      const filter = response.every(function (movie) {
        return movie.genres.find((genre) => genre.genre === genreFilter);
      });

      expect(filter).toBe(true);
    });

    it('movie/filters?year (GET) ', async () => {
      const yearFilter = 2003;
      const response = await client.send('get.movie.with.filter', {year: String(yearFilter)}).toPromise();

      const filter = response.every(function (movie) {
        return movie.year === yearFilter;
      });

      expect(filter).toBe(true);
    });

    it('movie/filters?country (GET) ', async () => {
      const countryFilter = 'ru';
      const response = await client.send('get.movie.with.filter', {country: countryFilter}).toPromise();

      const filter = response.every(function (movie) {
        return movie.countries.find((country) => country.country === countryFilter);
      });

      expect(filter).toBe(true);
    });

    it('movie/filters?rating (GET) ', async () => {
      const ratingFilter = 7;
      const response = await client.send('get.movie.with.filter', {rating: ratingFilter}).toPromise();

      const filter = response.every(function (movie) {
        return movie.rating > ratingFilter;
      });

      expect(filter).toBe(true);
    });

    it('movie/filters?votes (GET) ', async () => {
      const votesFilter = 7;
      const response = await client.send('get.movie.with.filter', {votes: votesFilter}).toPromise();

      const filter = response.every(function (movie) {
        return movie.votes > votesFilter;
      });

      expect(filter).toBe(true);
    });

    it('movie/filters?sort (GET) ', async () => {
      const sortFilter = 'title';
      const movies = await client.send('get.movie.with.filter', {sort: sortFilter}).toPromise();

      let filter = true;

      for(let i = 0; i < movies.length-1; i++) {
        if(movies[i].title[0] > movies[i+1].title[0])  {
          filter = false;
          break;
        }
      }

      expect(filter).toBe(true);
    });
  });
});
