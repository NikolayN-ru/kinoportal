import { Links } from "./LinksEnum";

export interface ICountry {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}
