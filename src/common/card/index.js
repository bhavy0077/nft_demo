import { makeStyles } from '@material-ui/core';
import React from 'react';
import Colors from '../../colors';

const useStyles = makeStyles({
    card: {
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        maxWidth: "24rem",
        position: "relative",
        border: "1px solid #ccc",
        borderRadius:'10px',
        backgroundColor:Colors.palette.white,
        marginBottom:'2rem',
        marginTop:'2rem',
        boxShadow: " 0px 0px 10px 5px  #A9A9A9",
    }
});


const Card = props => {
    const classes = useStyles();
  return (
    <div className={`${classes.card} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
