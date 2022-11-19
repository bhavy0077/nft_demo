import { makeStyles } from "@material-ui/core";
import Colors from "../../colors";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    height: "auto",
    padding: "0 40px",
    backgroundColor: Colors.palette.blue,
    color: Colors.palette.white,
    fontWeight: "700",
  },
  rightHeader: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: 0,
    },
  },
  mainSearch: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    background: "white",
    borderRadius: 20,
    display: "flex",
    height: "fit-content",
  },
  mainUl: {
    display: "flex",
    width: "100%",
    cursor: "pointer",
    float: "left",
    listStyleType: "none",
  },
  link: {
    marginLeft: "15%",
    "&:hover": {
      color: Colors.palette.gray,
    },
  },
  headerMenu: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
    gap: "0px",

    "& .MuiButton-text, .MuiSvgIcon-root": {
      color: Colors.palette.white,
    },
  },
  sidebarIcon: {
    display: "none",
  },
  connectBtn: {
    display: "flex !important",
    backgroundColor: `${Colors.palette.sky} !important`,
    color: `${Colors.palette.white} !important`,
    borderRadius: "50px !important",
    textTransform: "initial !important",
    padding: "8px 15px !important",
  },
  "@media(max-width: 1180px)": {
    headerStyle: {
      padding: "0 20px ",
    },
    headerMenu: {
      display: "none",
    },
    rightHeader: {
      display: "flex",
      justifyContent: "end",
    },
    sidebarIcon: {
      display: "block",
      marginLeft: "10px",
    },
  },
  "@media(max-width: 768px)": {
    socialIcons: {
      display: "none",
    },
    connectBtn: {
      display: "none !important",
    },
    drawerButton:{
      display: "flex !important",
      backgroundColor: `${Colors.palette.sky} !important`,
      color: `${Colors.palette.white} !important`,
      borderRadius: "50px !important",
      textTransform: "initial !important",
    },
   
    rightHeader: {
      justifyContent: "end",
    },
  }
}));

export { useStyles };
