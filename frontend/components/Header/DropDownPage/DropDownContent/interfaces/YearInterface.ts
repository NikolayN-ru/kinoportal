import { Links } from "./LinksEnum";

export interface IYear {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}
