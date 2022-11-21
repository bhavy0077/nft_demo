import { makeStyles } from "@material-ui/core";

const useStyleSlider = makeStyles((theme) => ({
  //   sliderArrow: {
  //     position: "absolute",
  //     height: "100%",
  //     width: "100%",
  //   },
  //   arrowBtn: {
  //     top: "45%",
  //     zIndex: 1,
  //   },
  //   next: {
  //     float: "right",
  //   },
  content: {
    maxWidth: "1280px",
    overflowX: "hidden",
    margin: "0 auto",
  },
  card: {
    height:'auto',
    display: "flex",
    flexDirection: "column",
    maxWidth: "24rem",
    position: "relative",
    border: "1px solid #ccc",
    borderRadius: '2%',
    marginBottom:'2rem',
    boxShadow:  " 0 6px 20px 0 rgba(0, 0, 0, 0.21)"
    
  },
  text:{
    float:'left',
    padding:'3px 10px',
    marginBottom:'1rem'
  },
  cardImage: {
    width: "100%",
    height: "14rem",
    maxWidth: "100%",
    objectFit: "cover",
      borderRadius: '2%',
  },
  article:{
    height:'100%',
    position:'relative',
    overflow:'hidden',
  },
  header:{
    fontSize: '20px',
    color: 'black',
    textAlign: 'start',
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 10,
    right: 0,
    height: 'fit-content',
    margin: 'auto',
    
  },
 
  controls: {
    display: "flex",
    justifyContent: "end",
    marginBottom: "1.5rem",
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

  //   .controls button:hover {
  //     background-color: #0ea8c7;
  //   }

  //   .controls button:nth-child(1) {
  //     margin-right: 2rem;
  //   }
}));

export { useStyleSlider };
