import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  commentBody: {
    borderRadius: "5px",
    width: "85%",
    background: "#e3e3e3",
    margin: "30px",
  },
  commentImage: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
  },
  commentTop: {
    display: "flex",
    flexDirection: "row",
    padding: "7px",
  },
  commentText: {
    margin: 0,
    padding: "0 10px 5px",
    textAlign: "left",
    width: "100%",
    "& *": {
      margin: 0,
    },
  },
  commentTitle: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10px",
    "& *": {
      margin: 0,
    },
    "& p": {
      fontSize: "10px",
    },
    "& h2": {
      fontSize: "14px",
    },
  },
}));
export default function Comment({ image, text, date }) {
  const classes = useStyles();

  return (
    <Box className={classes.commentBody} boxShadow={5}>
      <div className={classes.commentTop}>
        <img src={image} className={classes.commentImage} />
        <div className={classes.commentTitle}>
          <h2>Username</h2>
          <p>{date}</p>
        </div>
      </div>
      <div className={classes.commentText}>
        <p>{text}</p>
      </div>
    </Box>
  );
}
