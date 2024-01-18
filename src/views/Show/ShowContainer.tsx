import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Chip,
  Tooltip,
  LinearProgress,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { useStyles } from "./styles";
import { Show } from "../../models";
import { useParams } from "react-router";
import { useApiClient } from "../../hooks";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { ShowSeasonsEpisodes } from "./ShowSeasonsEpisodes";
import { CastInformation } from "./CastInformation";
import { RatingInformation } from "../../layouts/App";
import { SideInformation } from "../../layouts/App";
import { ShowImages } from "./ShowImages";
import { getYear } from "util/helper";

interface Params {
  showId: string;
}

/**
 *
 * Show container which contains the details of show.
 */

export const ShowContainer: React.FC = () => {
  const classes = useStyles();
  const { showId } = useParams<Params>();
  const [sideInformation, setInformation] = React.useState<
    { [key: string]: string } | undefined
  >();
  const [{ data: show, loading }] = useApiClient<Show>(`/shows/${showId}`);

  const duration = show?.premiered
    ? `${getYear(show?.premiered)} - ${getYear(show?.ended ?? "")}`
    : "";

  const prepareSideInformationData = useCallback(() => {
    const data = {
      Network: show?.network?.name ?? "",
      Schedule: show?.schedule.days[0] ?? "",
      Status: show?.status ?? "",
      "Show type": show?.type ?? "",
      Runtime: show?.runtime ? `${show?.runtime} minutes` : "",
    };
    setInformation(data);
  }, [show]);

  React.useEffect(() => {
    if (!show) return;
    prepareSideInformationData();
  }, [prepareSideInformationData, show]);
  return (
    <React.Fragment>
      <div className={classes.body} data-testid="show-container">
        {loading && <LinearProgress />}
        {!show && !loading && (
          <Typography variant="h4" className={classes.errorTitle} color="error">
            No show found
          </Typography>
        )}
        {show && (
          <div>
            <div className={classes.pageTitle}>
              <div>
                <Typography variant="h3">{show.name}</Typography>
                <Typography variant="caption">{duration}</Typography>
              </div>
              <div>
                <Typography variant="subtitle2">RATING</Typography>
                <RatingInformation ratingValue={show.rating.average} />
              </div>
            </div>
            <Grid container justifyContent="space-between">
              <Grid item lg={2} md={3} xs={12}>
                <Card className={classes.root}>
                  <CardMedia
                    image={show?.image.original}
                    title={show?.name}
                    component="img"
                  />
                </Card>
                <CardActions disableSpacing>
                  <Tooltip title="Add to favorites">
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
                <div className={classes.genres}>
                  {show?.genres?.map((genre, index) => {
                    return (
                      <Chip
                        variant="outlined"
                        key={index}
                        label={genre}
                        size="small"
                      />
                    );
                  })}
                </div>
              </Grid>
              <Grid item lg={7} md={5} xs={12}>
                <Typography
                  variant="h6"
                  dangerouslySetInnerHTML={{
                    __html: show.summary,
                  }}
                />

                <ShowImages />
              </Grid>
              <Grid item lg={2} md={3} xs={12}>
                {sideInformation && (
                  <SideInformation
                    title={"Show info"}
                    data={sideInformation}
                    ratingValue={show.rating.average}
                  />
                )}
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <Grid item lg={8} md={8} xs={12}>
                <ShowSeasonsEpisodes />
              </Grid>
              <Grid item lg={2} md={3} xs={12}>
                <CastInformation />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
