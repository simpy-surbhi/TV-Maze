import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  body: {
    padding: theme.spacing(0, 4, 4, 4),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 8, 8, 8),
    },
  },

  link: {
    textDecoration: "none",
    display: "flex",
    padding: theme.spacing(2, 0),
  },
  root: {
    width: 230,
  },
  errorTitle: {
    fontWeight: "bold",
    marginTop: theme.spacing(5),
  },

  pageTitle: {
    display: "flex",
    justifyContent: "space-between",
  },

  pageSubtitle: {
    paddingBottom: theme.spacing(2),
  },
  genres: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  castInfoContainer: {
    paddingTop: theme.spacing(5),
  },
}));
