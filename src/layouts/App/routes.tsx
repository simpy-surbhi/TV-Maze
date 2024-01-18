import { RouteProps } from "react-router-dom";
import { EpisodeContainer, ShowContainer } from "../../views";

export function getRoutes() {
  const routes: RouteProps[] = [
    {
      path: "/home",
      component: ShowContainer,
    },
    {
      path: "/shows/:showId",
      component: ShowContainer,
    },
    {
      path: "/episodes/:episodeId",
      component: EpisodeContainer,
    },
  ];
  return routes;
}
