import { makeStyles } from "@material-ui/core";

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
    width: 900,
    margin: "0 auto",
    borderRadius:'5px',
    position:'relative',
    boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",

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

}));

export { useStyleSlider };
