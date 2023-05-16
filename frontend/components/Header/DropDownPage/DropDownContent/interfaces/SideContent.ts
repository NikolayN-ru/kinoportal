import { Links } from "./LinksEnum";

export interface ISideContent {
    id: string;
    name: string;
    url: string;
    usedFor: Links[];
  }