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
  seasons: number;
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
