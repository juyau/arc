import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    textTransform: "none",
    minWidth: 10,
    marginLeft: "30px",
    marginRight: "25px",
    borderRadius: "50px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/service" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar disableGutters>
          <Button>
            <img alt="company logo" src={logo} className={classes.logo} />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
          >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              className={classes.tab}
              component={Link}
              to="/service"
              label="Service"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/revolution"
              label="The Revolution"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="About Us"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/contact"
              label="Contact"
            />
          </Tabs>
          <Button variant="contained" className={classes.button}>
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
