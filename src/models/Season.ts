export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel?: string;
  image?: string;
  summary?: string;
  _links: SeasonLinks;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface SeasonLinks {
  self: SeasonSelf;
}

export interface SeasonSelf {
  href: string;
}
