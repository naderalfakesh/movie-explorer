import React, { useState, useRef } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavSubMenu from "./NavSubMenu";

const useStyles = makeStyles((theme) => ({
    link: {
        padding: theme.spacing(2),
        // "&:hover": {
        //     color: theme.palette.secondary.main,
        // },
    },
}));

export default function Navlinks() {
    const classes = useStyles();
    const [toggleMenu, setToggleMenu] = useState(null);
    const linkRef = useRef(null);
    return (
        <div>
            {list.map((link) => (
                <React.Fragment key={link.url}>
                    <Link
                        href={link.url}
                        id={link.url}
                        color={"textPrimary"}
                        variant="body2"
                        className={classes.link}
                        key={link.url}
                        ref={linkRef}
                        onMouseEnter={(event) =>
                            setToggleMenu(event.currentTarget)
                        }
                        onMouseLeave={(event) => setToggleMenu(null)}
                    >
                        {link.name}
                    </Link>
                    {link.subList.length > 0 && (
                        <>
                            <ExpandMoreIcon color={"primary"} />{" "}
                            <NavSubMenu
                                subList={link.subList}
                                toggleMenu={null}
                            />
                        </>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

const list = [
    { name: "Home", url: "/", subList: [] },
    {
        name: "Movies",
        url: "/movies",
        subList: [
            { name: "Most recent m", url: "/movies/recent" },
            { name: "Most popular", url: "/movies/popular" },
            { name: "Best rated", url: "/movies/rated" },
        ],
    },
    {
        name: "Tv shows",
        url: "/series",
        subList: [
            { name: "Most recent t", url: "/series/recent" },
            { name: "Most popular", url: "/series/popular" },
            { name: "Best rated", url: "/series/rated" },
        ],
    },
    {
        name: "Cast",
        url: "/cast",
        subList: [
            { name: "Most recent c", url: "/cast/recent" },
            { name: "Most popular", url: "/cast/popular" },
            { name: "Best rated", url: "/cast/rated" },
        ],
    },
];
