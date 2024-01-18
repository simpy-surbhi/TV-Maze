const env = process.env;

export const Config = {
  API_BASE_URL: env.REACT_APP_API_BASE_URL || "https://api.tvmaze.com", // read the base url from env variable, if not present, there is fallback value
};
