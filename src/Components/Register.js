import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperRegister: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarRegister: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  formRegister: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submitRegister: {
    margin: theme.spacing(3, 0, 2),
  },
  registerConditionalGrid: {
    "& *": {
      marginTop: "5px",
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const handleRadioChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paperRegister}>
        <Avatar className={classes.avatarRegister}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.formRegister} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm password"
                type="password"
                id="confirmPssword"
                autoComplete="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="LinkedIn URL"
                id="linkedIn"
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup value={role} onChange={handleRadioChange}>
                <FormControlLabel
                  value="Student"
                  control={<Radio />}
                  label="Student"
                />
                <FormControlLabel
                  value="Company"
                  control={<Radio />}
                  label="Company"
                />
              </RadioGroup>
            </Grid>

            {role === "Student" ? (
              <Grid item xs={12} className={classes.registerConditionalGrid}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Birth date"
                    id="date"
                    type="date"
                    defaultValue="10-01-2001"
                    InputLabelProp={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            ) : role === "Company" ? (
              <Grid item xs={12} className={classes.registerConditionalGrid}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Company name"
                    id="compName"
                  />
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Location"
                    id="location"
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitRegister}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
