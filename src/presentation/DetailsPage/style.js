import { makeStyles } from "@material-ui/core/styles";

const css = makeStyles((theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.grey[200],
        display: "grid",
        gridTemplateColumns: "1fr 1fr 4fr",
        gridTemplateRows: "repeat(6,1fr)",
        overflow: "hidden",
    },
    poster: {
        gridColumn: "1/4",
        gridRow: "1/4",
        width: "100%",
        background: theme.palette.grey[200],
        backgroundImage: (props) => `url(${props.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: "skewY(-2deg)",
        transformOrigin: "0 0",
        zIndex: 1,
    },
    thumbnail: {
        gridColumn: "2/3",
        gridRow: "2/5",
        zIndex: 2,
    },

    categories: {
        gridColumn: "2/3",
        gridRow: "5/6",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5),
            backgroundColor: "white",
        },
    },
    movieDetails: {
        gridColumn: "3/4",
        gridRow: "2/4",
        zIndex: 2,
        paddingLeft: theme.spacing(5),
        color: "#C7C1BA",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
    },
    overview: {
        gridColumn: "3/4",
        gridRow: "4/6",
        color: "#B1B0AC",
        fontWeight: "bold",
        padding: theme.spacing(3, 5),
    },
    title: {
        color: "white",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
    },
    title2: {
        textDecoration: "underline",
    },
    ratings: {
        paddingTop: theme.spacing(2),
        fontSize: "1.125rem",
        display: "flex",
        "& span": {
            marginRight: theme.spacing(4),
        },
    },
}));

export default css;
