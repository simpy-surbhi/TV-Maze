import { Card, CardMedia, Divider, Typography, Grid } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";
import { Episode } from "models/Episode";
import { RatingInformation } from "../../layouts/App";
import { Link } from "react-router-dom";
import { formatDateLong } from "util/helper";

interface Props {
  episode: Episode;
}

/**
 *
 * Episode item which is rendered as list item in Show container component.
 */
export const EpisodeItem: React.FC<Props> = ({ episode }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="space-between"
        className={classes.episodeItemGridContainer}
      >
        <Grid item lg={3} md={3} xs={12}>
          <Card>
            <Link to={`/episodes/${episode.id}`}>
              <CardMedia
                image={episode?.image.medium}
                title={episode?.name}
                component="img"
              />
            </Link>
          </Card>
        </Grid>
        <Grid
          item
          lg={9}
          md={9}
          xs={12}
          className={classes.episodeItemHeaderSpace}
        >
          <div className={classes.episodeItemHeader}>
            <Typography
              className={classes.link}
              color="textPrimary"
              variant="subtitle1"
              component={Link}
              to={`/episodes/${episode.id}`}
            >
              <strong>
                {`S${episode.season}.E${episode.number} ∙ ${episode.name}`}
              </strong>
            </Typography>
            <Typography variant="subtitle2">
              {formatDateLong(episode.airdate)}
            </Typography>
          </div>
          <Typography
            variant="subtitle2"
            className={classes.episodeItemText}
            dangerouslySetInnerHTML={{
              __html: episode.summary,
            }}
          />
          {episode.rating.average && (
            <RatingInformation ratingValue={episode.rating.average} />
          )}
        </Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};
