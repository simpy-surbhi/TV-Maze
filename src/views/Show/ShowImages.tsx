import { ImageList, ImageListItem } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router";
import { useApiClient } from "../../hooks";
import { ShowImage } from "models";

interface Params {
  showId: string;
}

/**
 *
 * Show images component which renders the images, posters of the show.
 */
export const ShowImages: React.FC = () => {
  const classes = useStyles();
  const { showId } = useParams<Params>();
  const [{ data: images }] = useApiClient<ShowImage[]>(
    `/shows/${showId}/images`
  );

  return (
    <React.Fragment>
      <div className={classes.imageRoot}>
        <ImageList className={classes.imageList} cols={2.5}>
          {images?.map((item) => (
            <ImageListItem key={item.id}>
              <img src={item.resolutions.original.url} alt={item.type} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </React.Fragment>
  );
};
