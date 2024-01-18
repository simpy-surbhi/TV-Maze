import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router";
import { useApiClient } from "../../hooks";
import { AvatarItem } from "../../layouts/App";
import { Episode } from "models";

interface Params {
  episodeId: string;
}

/**
 *
 * Cast and Crew container component which renders cast and crew information of the episode
 */
export const CastCrewInformation: React.FC = () => {
  const classes = useStyles();
  const { episodeId } = useParams<Params>();
  const [{ data: episode }] = useApiClient<Episode>(
    `/episodes/${episodeId}?embed[]=guestcast&embed[]=guestcrew`
  );

  return (
    <React.Fragment>
      {!!episode?._embedded?.guestcast?.length && (
        <div className={classes.castInfoContainer}>
          <Typography variant="h4">TOP CAST</Typography>
          <Grid container>
            {episode?._embedded?.guestcast?.map((cast, index) => {
              return (
                <Grid item lg={3} md={6} xs={12} key={index}>
                  <AvatarItem
                    primaryText={cast.person.name}
                    secondaryText={` as ${cast.character.name}`}
                    image={cast.person.image?.original ?? ""}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
      {episode?._embedded?.guestcrew?.length && (
        <div className={classes.castInfoContainer}>
          <Typography variant="h4">TOP CREW</Typography>
          {/* <div>{episode}</div> */}
          <Grid container>
            {episode?._embedded?.guestcrew?.map((crew, index) => {
              return (
                <Grid item lg={3} md={6} xs={12} key={index}>
                  <AvatarItem
                    primaryText={crew.person.name}
                    secondaryText={crew.guestCrewType}
                    image={crew.person.image?.original ?? ""}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
};
