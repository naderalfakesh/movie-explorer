import React from "react";
import TopBar from "./TopBar";
import List from "./List";
import BottomBar from "./BottomBar";
import { Box } from "@material-ui/core";
import BackToTop from "../BackToTop";

export default function PaginatedList({
    list,
    type,
    searchType,
    page,
    total_results,
    total_pages,
    handlePageChange,
    isLoading,
}) {
    const handlePageChangeAndScroll = (value) => {
        BackToTop();
        handlePageChange(value);
    };
    return (
        <Box>
            <TopBar total={total_results} type={type} />
            <List
                list={list}
                type={type}
                searchType={searchType}
                isLoading={isLoading}
            />
            <BottomBar
                page={page}
                total={total_pages}
                type={type}
                handlePageChange={handlePageChangeAndScroll}
            />
        </Box>
    );
}
