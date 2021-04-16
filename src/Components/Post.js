import { useState, useEffect, React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import ibm from "../Images/ibm.jpg";

const useStyles = makeStyles((theme) => ({
  post: {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0",
    width: "250px",
    display: "block",
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
    justifyContent: "space-between",
  },
  jobDescription: {},
  companyPhoto: {
    display: "flex",
  },
  jobResumee: {
    padding: "0 10px",
  },
}));
export default function Post() {
  const classes = useStyles();
  const [infos, setInfo] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setInfo(res.data);
    });
  });
  return (
    <div className={classes.bodyy}>
      {infos.map((info) => (
        <Link to="/post/${info.id}">
          <div className={classes.post} key={info.id}>
            <div className={classes.jobInfoResumee}>
              <div className={classes.companyPhoto}>
                <img src={ibm} style={{ height: "50px", width: "50px" }} />
                <div className={classes.jobResumee}>
                  <div className={classes.jobTitle}>Software developer</div>
                  <div className={classes.companyName}>by Ibm</div>
                </div>
              </div>
              
            </div>
            <div className={classes.jobDescription}>
              Dolor culpa Lorem est tempor et pariatur sint. Duis velit esse
              pariatur sit non nulla. Dolor ad laborum cupidatat veniam
              proident.
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
