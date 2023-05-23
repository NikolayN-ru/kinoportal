import { ICountry } from "./CountryInterface";
import { IGenre } from "./GenreInterface";
import { ISideContent } from "./SideContent";
import { IYear } from "./YearInterface";

export interface IFilms {
    genres: IGenre[];
    countries: ICountry[];
    years: IYear[];
    sideContent: ISideContent[];
  }
  