import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        width: (props) => props.imgWidth,
        height: (props) => props.imgHeight,
        background: theme.palette.primary.main,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "4px",
        "&:hover div:nth-child(2)": {
            bottom: 0,
        },
        "&:hover div:nth-child(1)::before": {
            bottom: 0,
        },
        "&:hover img": {
            filter: "blur(5px)",
            transform: "translateY(-50px)",
        },
    },
    poster: {
        position: "relative",
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: -140,
            left: 0,
            zIndex: 1,
            background: "linear-gradient(0deg, #000 50%, transparent)",
            transition: "0.5s",
        },
    },
    posterImg: {
        width: "100%",
        objectFit: "cover",
        transition: "0.5s",
    },
    details: {
        color: "#fff",
        position: "absolute",
        height: "90%",
        width: "100%",
        boxSizing: "border-box",
        padding: theme.spacing(2),
        bottom: -140,
        left: 0,
        transition: "0.5s",
        zIndex: 2,
    },
    title: {
        fontWeight: 900,
    },
    rating: {
        color: "#f5b50a",
        fontSize: "1em",
    },
    type: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3,
        padding: theme.spacing(0.5, 1),
        borderRadius: "0 0 3px 3px",
        color: "white",
        backgroundColor: theme.palette.secondary.dark,
        textTransform: "uppercase",
    },
}));

export default useStyles;
