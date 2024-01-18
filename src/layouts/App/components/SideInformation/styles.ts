import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
  },
  detailsText: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  rating: {
    fontSize: "14px",
  },
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    paddingTop: theme.spacing(1),
  },
}));
