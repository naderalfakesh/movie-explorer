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
    handlePageChange,
}) {
    const APP_BAR_HEIGHT = 64;
    const handlePageChangeAndScroll = (value) => {
        window.scrollTo({
            top: window.innerHeight - APP_BAR_HEIGHT,
            behavior: "smooth",
        });
        handlePageChange(value);
    };
    return (
        <Box>
            <TopBar total={total_results} type={type} />
            <List list={list} type={type} />
            <BottomBar
                page={page}
                total={total_pages}
                type={type}
                handlePageChange={handlePageChangeAndScroll}
            />
        </Box>
    );
}
