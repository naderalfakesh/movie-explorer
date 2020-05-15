import React from "react";
import { Typography, Link, Box, Divider } from "@material-ui/core";
import ActorAvatar from "../../Components/ActorAvatar";

export default function HomeSideBar() {
    return (
        <div>
            <Typography paragraph>SPOTLIGHT CELEBRITIES</Typography>
            <Divider />
            <ActorAvatar
                name={"Nader Alfakesh"}
                profession={"Actor"}
                img={"https://via.placeholder.com/75"}
                link={"#"}
            />
            <ActorAvatar
                name={"Nader Alfakesh"}
                profession={"Actor"}
                img={"https://via.placeholder.com/75"}
                link={"#"}
            />
            <ActorAvatar
                name={"Nader Alfakesh"}
                profession={"Actor"}
                img={"https://via.placeholder.com/75"}
                link={"#"}
            />
            <ActorAvatar
                name={"Nader Alfakesh"}
                profession={"Actor"}
                img={"https://via.placeholder.com/75"}
                link={"#"}
            />
            <Link href="#">SEE ALL CELEBRITIES ></Link>
        </div>
    );
}
