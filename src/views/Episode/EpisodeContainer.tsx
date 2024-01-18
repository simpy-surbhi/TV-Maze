import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Breadcrumbs,
  Link,
  Chip,
  LinearProgress,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router";
import { useApiClient } from "../../hooks";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Episode } from "models/Episode";
import { RatingInformation } from "../../layouts/App";
import { SideInformation } from "../../layouts/App";
import { CastCrewInformation } from "./CastCrewInformation";
import { formatDateLong, formatDateLongCompact } from "util/helper";

interface Params {
  episodeId: string;
}

/**
 *
 * Episode container component which is the root page of Episode. It renders the episode details.
 */
export const EpisodeContainer: React.FC = () => {
  const classes = useStyles();
  const { episodeId } = useParams<Params>();
  const [{ data: episode, loading }] = useApiClient<Episode>(
    `/episodes/${episodeId}?embed=show`
  );
  const [sideInformation, setInformation] = React.useState<
    { [key: string]: string } | undefined
  >();

  const prepareSideInformationData = useCallback(() => {
    const data = {
      Number: `Season ${episode?.season}, Episode ${episode?.number}`,
      "Air date": episode?.airdate
        ? formatDateLongCompact(episode?.airdate)
        : "",
      Runtime: episode?.runtime ? `${episode?.runtime} minutes` : "",
    };
    setInformation(data);
  }, [episode]);

  React.useEffect(() => {
    if (!episode) return;
    prepareSideInformationData();
  }, [episode, prepareSideInformationData]);
  return (
    <React.Fragment>
      <div className={classes.body} data-testid="episode-container">
        {loading && <LinearProgress />}
        {!episode && !loading && (
          <Typography variant="h4" className={classes.errorTitle} color="error">
            No episode found
          </Typography>
        )}
        {episode && (
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                color="inherit"
                href={`#/shows/${episode._embedded?.show?.id}`}
                className={classes.link}
              >
                <ChevronLeftIcon />
                {episode._embedded?.show?.name}
              </Link>
            </Breadcrumbs>
            <div className={classes.pageTitle}>
              <div className={classes.pageSubtitle}>
                <Typography variant="h3">{episode?.name}</Typography>
                <Typography variant="caption">
                  <strong>{`S${episode?.season}.E${episode?.number} `}</strong>
                </Typography>
                <Typography variant="caption">{`Episode aired on ${formatDateLong(
                  episode?.airdate
                )}`}</Typography>
              </div>
              {episode?.rating.average && (
                <div>
                  <Typography variant="subtitle2">RATING</Typography>
                  <RatingInformation ratingValue={episode?.rating.average} />
                </div>
              )}
            </div>
            <Grid container justifyContent="space-between">
              <Grid item lg={2} md={3} xs={12}>
                <Card className={classes.root}>
                  <CardMedia
                    image={episode?.image.original}
                    title={episode?.name}
                    component="img"
                  />
                </Card>
              </Grid>
              <Grid item lg={7} md={5} xs={12}>
                <div className={classes.genres}>
                  {episode._embedded?.show?.genres?.map((genre, index) => {
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
                <Typography
                  variant="h6"
                  dangerouslySetInnerHTML={{
                    __html: episode.summary,
                  }}
                />
              </Grid>
              <Grid item lg={2} md={3} xs={12}>
                {sideInformation && (
                  <SideInformation
                    title={"Episode info"}
                    data={sideInformation}
                    ratingValue={episode.rating.average}
                  />
                )}
              </Grid>
            </Grid>
            <CastCrewInformation />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
