import { Image } from "./Show";

export interface Cast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday?: string;
  deathday: any;
  gender: string;
  image: Image;
  updated: number;
  _links: CastLinks;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface CastLinks {
  self: CastSelf;
}

export interface CastSelf {
  href: string;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image?: Image;
  _links: CastLinks;
}
