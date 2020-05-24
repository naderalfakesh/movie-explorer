import React from "react";
import TopBar from "./TopBar";
import List from "./List";
import BottomBar from "./BottomBar";
import { Box } from "@material-ui/core";

export default function PaginatedList({
    list,
    type,
    page,
    total_results,
    total_pages,
}) {
    return (
        <Box>
            <TopBar total={total_results} type={type} />
            <List list={list} type={type} />
            <BottomBar page={page} total={total_pages} type={type} />
        </Box>
    );
}
