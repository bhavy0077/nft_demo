import React from 'react'
import { useStyles } from './style'

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
    <box className={classes.headerStyle}>
      <h1>Footer</h1>
    </box>
  </div>
  )
}

export default Footer