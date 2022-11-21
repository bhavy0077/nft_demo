import { makeStyles } from "@material-ui/core";
import Colors from "../../colors";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    height: "200px",
    padding: "0 40px",
    backgroundColor: Colors.palette.blue,
    color: Colors.palette.white,
  },
  mobileMenu: {
    display: "block",
  },
  "@media(max-width: 1180px)": {
    headerStyle: {
      display: "block",
    },
  },
  "@media(max-width: 780px)": {
    headerStyle: {
      display: "block",
    },
  },
}));

export { useStyles };
