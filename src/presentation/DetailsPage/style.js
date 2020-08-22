import { makeStyles } from "@material-ui/core/styles";

const css = makeStyles((theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.grey[200],
        display: "grid",
        gridTemplateColumns: "1fr 1fr 4fr",
        gridTemplateRows: "repeat(6,1fr)",
        gridTemplateAreas: `
        ". .         .         " 
        ". thumbnail  details  " 
        ". thumbnail  details  " 
        ". thumbnail  overview " 
        ". categories overview " 
        ". .          overview "`,
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr",
            gridTemplateAreas: `
        "thumbnail thumbnail  thumbnail" 
        "thumbnail thumbnail  thumbnail" 
        "categories categories categories" 
        "details details details" 
        "overview overview overview" 
        "overview overview overview"`,
        },
    },
    backgroundImage: {
        gridColumn: "1/4",
        gridRow: "1/4",
        width: "100%",
        background: (props) =>
            props.background
                ? `url(${props.background}) no-repeat`
                : theme.palette.primary.main,
        backgroundSize: "cover !important",
        transform: "skewY(-2deg)",
        transformOrigin: "0 0",
        zIndex: 1,
        [theme.breakpoints.down("sm")]: {
            transform: "unset",
            gridRow: "1/7",
        },
    },
    thumbnail: {
        gridArea: "thumbnail",
        zIndex: 2,
        [theme.breakpoints.down("md")]: {
            width: "20vw",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(5),
            width: "35vw",
            justifySelf: "center",
        },
        [theme.breakpoints.down("xs")]: {
            width: "50vw",
        },
    },

    categories: {
        gridArea: "categories",
        display: "flex",
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5),
            backgroundColor: "white",
        },
    },
    movieDetails: {
        gridArea: "details",
        zIndex: 2,
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        color: "#C7C1BA",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
    overview: {
        gridArea: "overview",
        color: theme.palette.primary.light,
        fontWeight: "bold",
        padding: theme.spacing(3, 5),
        zIndex: 2,
        [theme.breakpoints.down("sm")]: {
            color: theme.palette.grey.A200,
        },
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
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
        },
    },
}));

export default css;
