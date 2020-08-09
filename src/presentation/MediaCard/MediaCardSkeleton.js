import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const imgWidth = 200;
const imgHeight = 300;

export default function MediaCardSkeleton() {
    return (
        <Skeleton
            variant="rect"
            width={imgWidth}
            height={imgHeight}
            style={{ backgroundColor: "#0f2133" }}
        />
    );
}
