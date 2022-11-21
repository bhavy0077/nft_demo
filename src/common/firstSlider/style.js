import { makeStyles } from "@material-ui/core";
import Colors from "../../colors";

const useStyleSlider = makeStyles((theme) => ({
  content: {
    maxWidth: "1280px",
    margin: "0 auto",
    textAlign: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: "24rem",
    position: "relative",
    border: "1px solid #ccc",
    boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.21)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardImage: {
    height: 500,
    width: 1230,
    margin: "0 auto",
    borderRadius: "10px",
    position: "relative",
    boxShadow: " 0px 0px 10px 5px #5F9EA0",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  controlsleft: {
    display: "flex",
    justifyContent: "start",
    marginLeft: "14% ",
  },
  controlsRight: {
    display: "flex",
    justifyContent: "end",
    marginRight: "14%",
  },

  controlsBtn: {
    width: "40px",
    height: "40px",
    border: 0,
    backgroundColor: "#14c8eb",
    color: "white",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.5s ease-out",
  },

  article: {
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    fontSize: "40px",
    color: "white",
    textAlign: "center",
    position: "absolute",
    background: "#00000094",
    bottom: "50px",
    padding: "10px 0",
    width: "80%",
    borderRadius: "30px",
    left: 0,
    right: 0,
    height: "fit-content",
    margin: "auto",
    color: Colors.palette.white,
  },
}));

export { useStyleSlider };
