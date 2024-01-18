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
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  root: {
    width: 230,
  },
  rootIcon: {
    width: 230,
  },
  errorTitle: {
    fontWeight: "bold",
    marginTop: theme.spacing(5),
  },

  pageTitle: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },

  genres: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },

  episodeItemHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  episodeItemGridContainer: {
    padding: theme.spacing(2, 0),
  },
  episodeItemHeaderSpace: {
    paddingLeft: theme.spacing(2),
  },
  episodeItemText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
  },
  castInfoContainer: {
    paddingTop: theme.spacing(10),
  },
  showSeasonEpisodesTab: {
    marginBottom: theme.spacing(2),
  },

  imageRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
  },
}));
