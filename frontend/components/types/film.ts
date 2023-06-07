export type MovieGenre = {
  id: number;
  genre: string;
};

export type MovieCountry = {
  id: number;
  country: string;
};

export type Movie = {
  id: number;
  title: string;
  titleEng: string;
  year: number;
  quality: string;
  rating: number;
  votes: number;
  description: string;
  genres: MovieGenre[];
  countries: MovieCountry[];
  imgVideo: string;
  time: number;
};

export type CollectionFilm = {
  id: number;
  name: string;
  link: string;
  image: string;
  genre: string;
  year: number;
  country: string;
  rating: number;
  age: number;
};

export type Collection = {
  id: number;
  name: string;
  link: string;
  items: CollectionFilm[];
};

export type CompilationItem = {
  id: number;
  name: string;
  image: string;
};

export type Compilation = {
  name: string;
  items: CompilationItem[];
};

export type PromoItemType = {
  id: number;
  name: string;
  link: string;
  image: string;
  age: number;
};

export type FilmBadge = {
  text: string;
  color: string;
};
