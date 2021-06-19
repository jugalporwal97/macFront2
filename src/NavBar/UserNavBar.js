import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getUser, removeUserSession } from "../Utils/Common";
import { Link, withRouter } from "react-router-dom";


import "./UserNavBar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
console.log(`getUser()`, getUser().fullName)
const UserNavBar = (props) => {
  const classes = useStyles();

 
  return (
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" className={classes.title}>
              Hi, {getUser().fullName}
            </Typography>
          </Link>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Show Products</Button>
          </Link>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Search</Button>
          </Link>

          <Button
            color="inherit"
            onClick={() => {
              removeUserSession();

              props.history.push("/login");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withRouter(UserNavBar);
