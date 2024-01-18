import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router";
import { useApiClient } from "../../hooks";
import { AvatarItem } from "../../layouts/App";
import { Cast } from "models/Cast";

interface Params {
  showId: string;
}

/**
 *
 * Cast container component which renders cast information of the show
 */
export const CastInformation: React.FC = () => {
  const classes = useStyles();
  const { showId } = useParams<Params>();
  const [{ data: casts }] = useApiClient<Cast[]>(`/shows/${showId}/cast`);

  return (
    <React.Fragment>
      <div className={classes.castInfoContainer}>
        <Typography variant="h4">TOP CAST</Typography>

        <Grid container justifyContent="space-between">
          {casts?.map((cast, index) => {
            return (
              <Grid item lg={12} md={12} xs={12} key={index}>
                <AvatarItem
                  primaryText={cast.person.name}
                  secondaryText={` as ${cast.character.name}`}
                  image={cast.person.image.original}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </React.Fragment>
  );
};
