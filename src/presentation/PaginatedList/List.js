import React from "react";
import MediaCard from "../../container/MediaCard";
import MediaCardSkeleton from "../MediaCard/MediaCardSkeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(200px, 1fr))",
        gridGap: theme.spacing(3),
        "& > *": {
            justifySelf: "center",
        },
    },
}));
export default function PaginatedList({ list, type, searchType, isLoading }) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {isLoading
                ? new Array(20)
                      .fill(1)
                      .map((item, index) => <MediaCardSkeleton key={index} />)
                : list.map((item, index) => (
                      <MediaCard {...item} type={type} key={index} />
                  ))}
        </div>
    );
}
