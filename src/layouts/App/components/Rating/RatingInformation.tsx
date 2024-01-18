import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";
import { Rating } from "@material-ui/lab";

interface Props {
  ratingValue: string;
}

export const RatingInformation: React.FC<Props> = ({ ratingValue }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.ratingText}>
        <Rating defaultValue={1} precision={1} max={1} readOnly size="large" />
        <Typography variant="h6">{ratingValue} </Typography>
        <Typography variant="subtitle2">/10</Typography>
      </div>
    </React.Fragment>
  );
};
