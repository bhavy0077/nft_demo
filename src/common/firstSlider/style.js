import { makeStyles } from "@material-ui/core";
import Colors from "../../colors";

const useStyleSlider = makeStyles((theme) => ({

  content: {
    maxWidth: "1280px",
    margin: "0 auto",
    textAlign:'center',
    // margin:'30px'
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
    height: 500 ,
    width: 1230,
    margin: "0 auto",
    borderRadius:'10px',
    position:'relative',
    boxShadow:  " 0px 0px 10px 5px #5F9EA0",
    marginBottom:'2rem',
    marginTop:'2rem'
    // width:'100%',
    // height:'50vh'
  },
  controlsleft: {
    display: "flex",
    justifyContent: "start",
    marginLeft:'14% ',
  },
  controlsRight: {
    display: "flex",
    justifyContent: "end",
    marginRight:'14%'
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


//    .slides .slick-prev,
//    .slides .slick-next{
//     position: 'absolute',
//     top: '50%',
//     z-index: ,
//    },
//    .slides .slick-prev{
//     left: '5%',
//    },
//    .slides .slick-next{
//     right:'5%',
//    }
article:{
  height:'100%',
  position:'relative',
  overflow:'hidden'
},
header:{
  fontSize: '40px',
  color: 'white',
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: 'fit-content',
  margin: 'auto',
  color:'#9867C5'
},

}));

export { useStyleSlider };
