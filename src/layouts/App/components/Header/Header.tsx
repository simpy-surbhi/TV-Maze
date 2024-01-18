import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./styles";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import { Link } from "react-router-dom";

interface Props {
  toggleDarkTheme: () => void;
}

export const Header: React.FC<Props> = ({ toggleDarkTheme }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
          >
            <Avatar
              variant={"rounded"}
              alt="The image"
              src="https://static.tvmaze.com/images/tvm-header-logo.png"
              style={{
                width: 200,
              }}
            />
          </Typography>
          <Button
            className={classes.button}
            startIcon={<NightsStayOutlinedIcon />}
            onClick={toggleDarkTheme}
          >
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
