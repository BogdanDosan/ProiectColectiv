import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import PublishIcon from "@material-ui/icons/Publish";
import { Controller, useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  createPostBody: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "5px",
    margin: "30px",
    padding: "30px",
  },
  createPostSection: {
    display: "flex",
    flexDirection: "column",
  },
  createPostBar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    "& *": {
      margin: "auto 0",
      padding: "5px",
    },
  },
  createPostAddInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  createPostAddDelete: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  createPostButton: {
    width: "35%",
    margin: "auto",
  },
  createPostTextarea: {
    resize: "none",
    width: "100%",
  },
}));

export default function CreatePost() {
  const classes = useStyles();
  const [responsabilities, setResponsabilities] = useState([""]);
  const [progLang, setProgLang] = useState([""]);
  const handleChange = (e, index, type, setType) => {
    const { value } = e.target;
    const list = [...type];
    list[index] = value;
    setType(list);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAddInputResp = () => {
    setResponsabilities([...responsabilities, ""]);
  };

  const handleAddInputProg = () => {
    setProgLang([...progLang, ""]);
  };

  const handleRemoveInputResp = () => {
    const list = [...responsabilities];
    list.pop();
    setResponsabilities(list);
  };

  const handleRemoveInputProg = () => {
    const list = [...progLang];
    list.pop();
    setProgLang(list);
  };
  const { handleSubmit, control } = useForm();
  return (
    <form>
      <Box className={classes.createPostBody} boxShadow={8}>
        <div className={classes.createPostSection} style={{ flex: 3 }}>
          <div className={classes.createPostBar}>
            <p>Job title: </p>
            <Controller
              name="jobTitle"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: { value: true, message: "*Job title required" },
                maxLength: { value: 30, message: "*Maximum 30 characters" },
              }}
            />
          </div>
          <div className={classes.createPostBar}>
            <p>Summary: </p>
            <Controller
              name="summary"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="standard"
                  multiline
                  rows={2}
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: { value: true, message: "*Summary required" },
                maxLength: { value: 140, message: "*Maximum 140 characters" },
              }}
            />
          </div>
          <div className={classes.createPostBar}>
            <p>Description: </p>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="standard"
                  multiline
                  rows={4}
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: { value: true, message: "*Description required" },
                maxLength: { value: 300, message: "*Maximum 300 characters" },
              }}
            />
          </div>
          <div className={classes.createPostBar}>
            <p>Job requirements</p>
          <Controller
              name="jobReq"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="standard"
                  multiline
                  rows={3}
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: { value: true, message: "*Job requirements required" },
                maxLength: { value: 200, message: "*Maximum 200 characters" },
              }}
            />
          </div>
        </div>
        <div
          className={classes.createPostSection}
          style={{ flex: 2, alignItems: "center" }}
        >
          <p>Job responsabilities</p>
          {responsabilities.map((item, i) => {
            return (
              <div>
                <input
                  key={i}
                  name="responsability"
                  type="text"
                  value={item.responsability}
                  onChange={(e) =>
                    handleChange(e, i, responsabilities, setResponsabilities)
                  }
                />
              </div>
            );
          })}
          <div className={classes.createPostAddDelete}>
            {responsabilities.length < 6 ? (
              <AddCircleIcon onClick={handleAddInputResp} />
            ) : (
              ""
            )}
            {responsabilities.length > 1 ? (
              <RemoveCircleIcon onClick={handleRemoveInputResp} />
            ) : (
              ""
            )}
          </div>
          {/*<pre>{JSON.stringify(responsabilities, null, 2)}</pre>*/}
          <div
            className={classes.createPostSection}
            style={{ flex: 2, alignItems: "center" }}
          >
            <p>Programming languages</p>
            {progLang.map((item, i) => {
              return (
                <div>
                  <input
                    key={i}
                    name="progLang"
                    type="text"
                    value={item.progLang}
                    onChange={(e) => handleChange(e, i, progLang, setProgLang)}
                  />
                </div>
              );
            })}
            <div className={classes.createPostAddDelete}>
              {progLang.length < 6 ? (
                <AddCircleIcon onClick={handleAddInputProg} />
              ) : (
                ""
              )}
              {progLang.length > 1 ? (
                <RemoveCircleIcon onClick={handleRemoveInputProg} />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* <pre>{JSON.stringify(progLang, null, 2)}</pre>*/}
          <Button
            variant="contained"
            color="primary"
            className={classes.createPostButton}
            onClick={handleSubmit(onSubmit)}
          >
            <PublishIcon />
            Submit
          </Button>
        </div>
      </Box>
    </form>
  );
}
