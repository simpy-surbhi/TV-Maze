import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { Image, Rating, Show } from "./Show";

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: EpisodeLinks;
  _embedded?: Embedded;
}

export interface Embedded {
  show?: Show;
  guestcast?: Cast[];
  guestcrew?: Crew[];
}
export interface EpisodeLinks {
  self: EpisodeSelf;
  show: Link;
}

export interface EpisodeSelf {
  href: string;
}

export interface Link {
  href: string;
}
