import { Links } from "./LinksEnum";

export interface IAbout {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}
