export interface Show {
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: string[] | null;
  status: string;
  runtime?: number;
  averageRuntime: number;
  premiered: string;
  ended?: null;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel: WebChannel;
  dvdCountry?: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
export interface Schedule {
  time: string;
  days: string[];
}
export interface Network {
  name: string;
}

export interface Rating {
  average: string;
}
export interface WebChannel {
  id: number;
  name: string;
  country?: null;
  officialSite: string;
}
export interface Externals {
  tvrage?: null;
  thetvdb: number;
  imdb: string;
}
export interface Image {
  medium: string;
  original: string;
}
export interface Links {
  self: SelfOrPreviousepisode;
  previousepisode: SelfOrPreviousepisode;
}
export interface SelfOrPreviousepisode {
  href: string;
}
