import { makeStyles } from "@material-ui/core/styles";
import ibm from "../Images/ibm.jpg";
import { Box, Button, Divider } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MediaQuery from "react-responsive";
const useStyles = makeStyles((theme) => ({
  profileBody: {
    display: "flex",
    flexWrap: "wrap",
    margin: "30px",
    position: "relative",
  },
  profilePhotoImg: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
  },
  profilePhotoDiv: {
    height: "200px",
    width: "200px",
  },
  divider: {
    margin: "20px 10px",
    background: "grey",
  },
  profileResumee: {
    display: "flex",
    flexDirection: "row",
  },
  profileResumeeText: {
    padding: "0 10px",
  },
  profileLeft: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    margin: "auto",
    flex: 1,
    padding: "40px",
    "& p": {
      color: "grey",
      fontSize: "14px",
    },
  },
  profileMid: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "10px 40px",
  },
  profileRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "10px 40px",
    textAlign: "left",
  },
  centerAlign: {
    textAlign: "center",
  },
  bar: {
    display: "flex",
    maxWidth: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    "& *": {
      padding: "5px",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  profileEditBtn: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "15px",
  },
}));

export default function Profile() {
  const classes = useStyles();

  const isActive = false;
  return (
    <Box className={classes.profileBody} boxShadow={8}>
      <div className={classes.profileLeft}>
        <div className={classes.profilePhotoDiv}>
          <img src={ibm} className={classes.profilePhotoImg} alt="" />
        </div>
        <h1>Display name</h1>
        <p>id: 1123451</p>
        <div className={classes.profileResumee}>
          <h4 className={classes.profileResumeeText}>Company</h4>
          <h4 className={classes.profileResumeeText}>
            {isActive ? "Online" : "Offline"}
          </h4>
        </div>
      </div>
      <Divider orientation="vertical" flexItem />
      <MediaQuery maxDeviceWidth={600}>
        <Divider />
      </MediaQuery>
      <div className={classes.profileMid}>
        <h2 className={classes.centerAlign}>Info</h2>

        <div className={classes.bar}>
          <span>First name</span>
          <p>Consectetur amet </p>
        </div>
        <div className={classes.bar}>
          <span>Last Name</span>
          <p>Quis proident culpa</p>
        </div>
        <div className={classes.bar}>
          <span>Birth date</span>
          <p>27.01.1999</p>
        </div>
        <div className={classes.bar}>
          <span>Location</span>
          <p>Timisoara</p>
        </div>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={classes.profileRight}>
        <h2 className={classes.centerAlign}>Contact</h2>
        <Button className={classes.bar}>
          <PhoneIcon />
          <p>075436432</p>
        </Button>
        <div></div>
        <Button className={classes.bar}>
          <MailOutlineIcon />
          <p>test@gmail.com</p>
        </Button>
        <Button className={classes.bar}>
          <LinkedInIcon />
          <p>https://www.linkedin.com/test123355</p>
        </Button>
      </div>
    </Box>
  );
}
