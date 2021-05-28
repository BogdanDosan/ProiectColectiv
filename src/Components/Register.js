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
import { useForm, Controller } from "react-hook-form";
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

const SignUp = () => {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const { handleSubmit, control } = useForm();
  const handleRadioChange = (event) => {
    setRole(event.target.value);
  };
  const onSubmit = (data) => {
    console.log(data);
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
        <form
          className={classes.formRegister}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    label="Email Address"
                  />
                )}
                rules={{
                  required: { value: true, message: "*E-mail required" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "*Invalid e-mail",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                    label="Password"
                    type="password"
                  />
                )}
                rules={{
                  required: { value: true, message: "*Password required" },
                  minLength: {
                    value: 8,
                    message: "*Password must be at least 8 characters long",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="confirmPassword"
                label="Confirm password"
                type="password"
                id="confirmPssword"
                autoComplete="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                    label="Phone number"
                    type="text"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "*Phone number required",
                  },
                  pattern: {
                    value:
                      /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/,
                    message: "Not a valid number",
                  },
                }}
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
                  <Controller
                    name="firstname"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                        label="First name"
                        type="text"
                      />
                    )}
                    rules={{
                      required: {
                        value: true,
                        message: "*First name required",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="lastname"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                        label="Last name"
                        type="text"
                      />
                    )}
                    rules={{
                      required: { value: true, message: "*Last name required" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="birthdate"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="date"
                        InputLabelProp={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{
                      required: {
                        value: true,
                        message: "*Birth date required",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            ) : role === "Company" ? (
              <Grid item xs={12} className={classes.registerConditionalGrid}>
                <Grid item xs={12}>
                  <Controller
                    name="companyname"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                        label="Company name"
                        type="text"
                      />
                    )}
                    rules={{
                      required: {
                        value: true,
                        message: "*Company name required",
                      },
                    }}
                  />
                  <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                        label="Location"
                        type="text"
                      />
                    )}
                    rules={{
                      required: { value: true, message: "*Location required" },
                    }}
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
};
export default SignUp;
