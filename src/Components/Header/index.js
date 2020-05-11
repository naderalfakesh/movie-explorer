import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../Navbar"
import headerBG from "../../assets/headerBG.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
      backgroundImage: `url(${headerBG})` ,
      backgroundSize: "cover"
    },
  }));

export default function Header() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar></NavBar>
        </div>
    )
}
