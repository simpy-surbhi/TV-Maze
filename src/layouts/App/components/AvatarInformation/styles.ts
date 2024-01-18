import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  avatarItem: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
