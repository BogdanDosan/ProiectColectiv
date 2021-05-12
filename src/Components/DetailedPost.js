import { Box, Divider, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "../Components/Comment";
import ibm from "../Images/ibm.jpg";
const useStyles = makeStyles((theme) => ({
  detailedPostBody: {
    margin: "30px",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "5px",
  },
  detailedPostAuthorNameDate: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10px",
    "& *": {
      margin: 0,
    },
  },
  detailedPostAuthor: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 0",
  },

  detailedPostDetails: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  detailedPostSection: {
    maxWidth: "50%",
    "& p": {
      padding: "0 20px",
    },
    "& li": {
      padding: "0 20px",
    },
  },
  detailedPostComments: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  detailedPostLeft: {
    display: "flex",
    flexDirection: "column",
    flex: 3,
  },
  detailedPostAuthorPhoto: {
    height: "65px",
    width: "65px",
    borderRadius: "50%",
  },
  detailedPostAddComment: {
    display: "flex",
    height: "40px",
    alignItems: "left",
    padding: "10px 0",
    "& img": {
      borderRadius: "50%",
      height: "100%",
      margin: "auto 10px",
    },
  },
  detailedPostCommentsComments: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
    maxHeight: "80vh",
  },
  detailedPostTitle: {
    display: "block",
    margin: "0 auto",
  },
}));
export default function Post() {
  const classes = useStyles();
  const test =
    "Ad amet ut fugiat commodo incididunt in voluptate Lorem commodo veniam. Aliquip consectetur veniam laboris dolor. Dolor cillum adipisicing eu et cupidatat nisi sit fugiat ex. Ad voluptate exercitation elit id est minim ex cupidatat qui excepteur mollit consequat. Excepteur velit adipisicing nulla et occaecat ex pariatur proident irure. Fugiat magna ex consequat sint adipisicing ad nostrud mollit magna commodo cillum mollit.";
  const listItemTest = [
    "Ipsum quis laborum qui nostrud non reprehenderit culpa quis pariatur.",
    "Adipisicing sint sunt consectetur exercitation qui.",
    "Sunt cillum tempor irure do esse sint excepteur labore est ea laborum id elit occaecat.",
    "Nostrud nisi deserunt minim officia fugiat deserunt proident.",
  ];
  const listItems = listItemTest.map((listItem) => <li>{listItem}</li>);
  return (
    <Box className={classes.detailedPostBody} boxShadow={8}>
      <div className={classes.detailedPostLeft}>
        <div className={classes.detailedPostAuthor}>
          <img src={ibm} className={classes.detailedPostAuthorPhoto} />
          <div className={classes.detailedPostAuthorNameDate}>
            <h2>IBM</h2>
            <p>26.01.2012</p>
          </div>
          <h1 className={classes.detailedPostTitle}>Junior web developer</h1>
        </div>

        <div className={classes.detailedPostDetails}>
          <div className={classes.detailedPostSection}>
            <h3>Description</h3>
            <p>{test}</p>
          </div>
          <div className={classes.detailedPostSection}>
            <h3>Requirements</h3>
            <p>{test}</p>
          </div>
          <div className={classes.detailedPostSection}>
            <h3>Job responsabilities</h3>
            {listItems}
          </div>
          <div className={classes.detailedPostSection}>
            <h3>Programming languages</h3>
            {listItems}
          </div>
        </div>
      </div>
      <Divider orientation="vertical" flexItem />

      <div className={classes.detailedPostComments}>
        <div className={classes.detailedPostCommentsComments}>
          <Comment
            image={ibm}
            text="Exercitation exercitation do sint ullamco minim esse fugiat amet nulla fugiat commodo."
            date="12.01.2019"
          />
          <Comment
            image={ibm}
            text="Tempor non eu nulla amet culpa aute excepteur veniam."
            date="22.01.2019"
          />
          <Comment
            image={ibm}
            text="Tempor esse ex occaecat nisi laboris in magna irure officia aute est."
            date="30.02.2020"
          />
          <Comment
            image={ibm}
            text="Est duis velit consectetur adipisicing dolor."
            date="12.01.2019"
          />
        </div>
        <div className={classes.detailedPostAddComment}>
          <img src={ibm} />
          <TextField
            variant="filled"
            placeholder="Add a comment"
            size="small"
          />
        </div>
      </div>
    </Box>
  );
}
