import React from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2)
    },
  }));

export default function Navlinks() {
  const classes = useStyles();
  return (
        <>
            {
                list.map(link => 
                <Link href={link.url} color={"textPrimary"} variant="body2" className={classes.root} >{link.name}</Link>
                )
            }
        </>
    )
}

const list= [
    {name: "Home" , url: "/" , list:[]},
    {name: "Movies" , url: "/movies" , list:[
        {name: "Most recent" , url: "/movies/recent" },
        {name: "Most popular" , url: "/movies/popular" },
        {name: "Best rated" , url: "/movies/rated" }
    ]},
    {name: "Tv shows" , url: "/tvshows" , list:[
        {name: "Most recent" , url: "/tvshows/recent" },
        {name: "Most popular" , url: "/tvshows/popular" },
        {name: "Best rated" , url: "/tvshows/rated" }
    ]},
    {name: "Cast" , url: "/cast" , list:[
        {name: "Most recent" , url: "/cast/recent" },
        {name: "Most popular" , url: "/cast/popular" },
        {name: "Best rated" , url: "/cast/rated" }
    ]},
]