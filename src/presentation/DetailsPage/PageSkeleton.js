import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Typography } from "@material-ui/core";
import css from "./style.js";
import { useTheme } from "@material-ui/core/styles";

export default function PageSkelton() {
    const classes = css();
    const theme = useTheme();
    return (
        <div>
            <div className={classes.gridContainer}>
                <div className={classes.backgroundImage}>
                    <Skeleton
                        variant="rect"
                        height="100%"
                        width="100%"
                        style={{ backgroundColor: theme.palette.primary.light }}
                    />
                </div>
                <div className={classes.thumbnail}>
                    <Skeleton
                        variant="rect"
                        // width={250}
                        height={300}
                        style={{ backgroundColor: theme.palette.primary.dark }}
                    />
                </div>
                <div className={classes.movieDetails}>
                    <Typography variant="h1" className={classes.title}>
                        <Skeleton
                            width="40%"
                            style={{
                                backgroundColor: theme.palette.primary.dark,
                            }}
                        />
                    </Typography>
                    <Typography variant="h6">
                        <Skeleton
                            width="40%"
                            style={{
                                backgroundColor: theme.palette.primary.dark,
                            }}
                        />
                    </Typography>
                    <Typography variant="subtitle1">
                        <Skeleton
                            width="20%"
                            style={{
                                backgroundColor: theme.palette.secondary.dark,
                            }}
                        />
                    </Typography>
                </div>
                <div className={classes.overview}>
                    <Skeleton
                        width="80%"
                        style={{
                            backgroundColor: theme.palette.primary.dark,
                        }}
                    />
                    <Skeleton
                        width="80%"
                        style={{
                            backgroundColor: theme.palette.primary.dark,
                        }}
                    />
                    <Skeleton
                        width="80%"
                        style={{
                            backgroundColor: theme.palette.primary.dark,
                        }}
                    />
                    <Skeleton
                        width="80%"
                        style={{
                            backgroundColor: theme.palette.primary.dark,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
