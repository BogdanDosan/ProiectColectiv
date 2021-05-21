import { useState, useEffect, React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import ibm from "../Images/ibm.jpg";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  post: {
    borderRadius: "10px",
    padding: "15px",
    marginTop: "20px",
    display: "block",
    flexGrow: 1,
    marginBottom: "80px",
  },
  bodyy: {
    display: "flex",
    flexWrap: "wrap",
    margin: "15px",
    justifyContent: "space-evenly",
    overflow: "hidden",
  },
  jobInfoResumee: {
    display: "flex",
    flexWrap: "wrap",
  },
  jobDescription: {
    padding: "5px 0",
    fontFamily:"Verdana, sans-serif",
    fontSize:"15px",
  },
  companyPhoto: {
    height: "50px",
    width: "50px",
  },
  jobResumee: {
    padding: "0 10px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    maxWidth: "20vw",
    "@media (max-width: 400px)": {
      maxWidth: "80vw",
    },
    "@media (max-width: 768px)": {
      maxWidth: "40vw",
    },
  },
  jobTitle: {
    fontWeight: "bold",
    fontFamily: "Noto Sans, sans-serif",
    fontSize: "medium",
  },
  companyName: {
    color: "grey",
    fontStyle: "italic",
    fontSize: "13px",
  },
}));
export default function Post() {
  const classes = useStyles();
  const [infos, setInfo] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setInfo(res.data);
    });
  });
  return (
    <div className={classes.bodyy}>
      {infos.map((info) => (
        <Link className={classes.link} to="/detailedPost">
          <Box className={classes.post} key={info.id} boxShadow={8}>
            <div className={classes.jobInfoResumee}>
              <div className={classes.companyPhoto}>
                <img
                  src={ibm}
                  alt=""
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                />
              </div>
              <div className={classes.jobResumee}>
                <div className={classes.jobTitle}>Software developer</div>
                <div className={classes.companyName}>by Ibm</div>
              </div>
            </div>
            <div className={classes.jobDescription}>
              Dolor culpa Lorem est tempor et pariatur sint. Duis velit esse
              pariatur sit non nulla. Dolor ad laborum cupidatat veniam
              proident.
            </div>
          </Box>
        </Link>
      ))}
    </div>
  );
}
