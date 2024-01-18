import { Typography, Avatar } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";

interface Props {
  primaryText: string;
  secondaryText: string;
  image: string;
}

export const AvatarItem: React.FC<Props> = ({
  primaryText,
  secondaryText,
  image,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.avatarItem}>
        <Avatar src={image} className={classes.large} />
        <div>
          <Typography variant="subtitle2">
            <strong>{primaryText}</strong>
          </Typography>
          <Typography variant="subtitle2">{secondaryText}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};
