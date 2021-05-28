import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Select } from "@material-ui/core";
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
  toolbar: {
    "& *": {
      margin: "0 5px",
    },
  },
  appbar: {
    background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = useState();
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/profile"
          >
            <PermIdentityIcon />
          </IconButton>
          <div className={classes.filterby}>
            <FormControl
              variant="filled"
              color="secondary"
              style={{ background: "#e3e3e3" }}
            >
              <InputLabel color="primary" style={{ margin: 0 }}>
                Filter by
              </InputLabel>
              <Select
                style={{ margin: 0 }}
                native
                value={state}
                onChange={handleChange}
                color="primary"
              >
                <option aria-label="None" value="">None</option>
                <option value={"titleAsc"}>Title-ascending</option>
                <option value={"titleDesc"}>Title-descending</option>
                <option value={"newest"}>Newest</option>
                <option value={"oldest"}>Oldest</option>
              </Select>
            </FormControl>
          </div>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button variant="contained" component={Link} to="/createPost">
            <AddCircleOutlineIcon />
            Create post
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
