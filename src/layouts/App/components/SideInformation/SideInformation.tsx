import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";
import { Rating } from "@material-ui/lab";

interface Props {
  data: { [key: string]: string };
  title: string;
  ratingValue: string;
}

export const SideInformation: React.FC<Props> = ({
  data,
  title,
  ratingValue,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader title={title} className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
          {Object.keys(data).map((key, index) => {
            return (
              <Typography variant="caption" key={index}>
                <div className={classes.detailsText}>
                  <b>{`${key}: `}</b>
                  {data[key]}
                </div>
              </Typography>
            );
          })}
          <Typography variant="caption" component="span">
            <div className={classes.detailsText}>
              <b>Rating: </b>
              <Rating
                defaultValue={parseFloat(ratingValue ?? 0)}
                precision={0.1}
                max={10}
                readOnly
                className={classes.rating}
                size="small"
              />
            </div>
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
