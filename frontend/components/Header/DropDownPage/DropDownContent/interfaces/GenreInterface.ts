import { Links } from "./LinksEnum";

export interface IGenre {
    id: string;
    name: string;
    url: string;
    usedFor: Links[];
  }