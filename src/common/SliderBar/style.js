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
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: "24rem",
    position: "relative",
    border: "1px solid #ccc",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //   cardHeader span: {
  //     color: "#2d3748"
  //   }

  cardImage: {
    width: "100%",
    height: "14rem",
    maxWidth: "100%",
    objectFit: "cover",
  },

  //   .card button {
  //     display: inline-block;
  //     background-color: #14c8eb;
  //     color: #fff;
  //     border: none;
  //     padding: 1.5em 1.6em;
  //     cursor: pointer;
  //     text-decoration: none;
  //     font-size: 15px;
  //     font-family: inherit;
  //     width: 100%;
  //     position: absolute;
  //     bottom: 0;
  //     transition: background-color 0.5s ease-out;
  //   }

  //   .card button:focus {
  //     outline: none;
  //   }

  //   .card button:hover {
  //     background-color: #0ea8c7;
  //   }

  //   .text-info {
  //     padding: 1rem 1.5rem;
  //     margin-bottom: 2.5rem;
  //   }
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
