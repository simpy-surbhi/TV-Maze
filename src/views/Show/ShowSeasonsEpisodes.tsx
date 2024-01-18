import { Tabs, Tab } from "@material-ui/core";
import React, { useCallback } from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router";
import { useApiClient } from "../../hooks";
import { Episode } from "models/Episode";
import Pagination from "@material-ui/lab/Pagination";
import { Season } from "models/Season";
import { ApiClient } from "ApiClient";
import { EpisodeItem } from "./EpisodeItem";

interface Params {
  showId: string;
}

/**
 *
 * This is season and episode information container.
 */
export const ShowSeasonsEpisodes: React.FC = () => {
  const classes = useStyles();
  const { showId } = useParams<Params>();
  const [seasonId, setSeasonId] = React.useState<number | undefined>();
  const [episodes, setEpisodes] = React.useState<Episode[] | undefined>();

  const [{ data: seasons }] = useApiClient<Season[]>(
    `/shows/${showId}/seasons`
  );
  const handleChangePage = (event: object, seasonNumber: number) => {
    const season = seasons?.find((season) => season.number === seasonNumber);
    season && setSeasonId(season.id);
  };
  const getEpisode = useCallback(async () => {
    const episodes = await ApiClient.get<Episode[]>(
      `/seasons/${seasonId}/episodes`
    );
    setEpisodes(episodes);
  }, [seasonId]);

  React.useEffect(() => {
    if (!seasons?.length) return;
    setSeasonId(seasons[0].id);
  }, [seasons]);

  React.useEffect(() => {
    if (!seasonId) return;
    getEpisode();
  }, [seasonId, getEpisode]);

  return (
    <React.Fragment>
      <Tabs
        value={0}
        indicatorColor="primary"
        className={classes.showSeasonEpisodesTab}
      >
        <Tab label="Seasons" />
      </Tabs>
      <Pagination
        count={seasons?.length}
        size="large"
        hidePrevButton
        hideNextButton
        onChange={handleChangePage}
      />
      {episodes?.map((episode, index) => {
        return <EpisodeItem episode={episode} key={index} />;
      })}
    </React.Fragment>
  );
};
