import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Collapse } from "@material-ui/core";
import { Link as routerLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BackToTop from "../../BackToTop";

export default function DrawerLink({ link, handleDrawerToggle }) {
    const [expand, setExpand] = React.useState(false);

    const handleExpand = (e) => {
        if (link.subList && link.subList.length > 0) {
            e.preventDefault();
            setExpand(!expand);
        } else {
            handleDrawerToggle();
            if (link.name !== "Home") {
                BackToTop();
            } else {
                BackToTop(0);
            }
        }
    };
    return (
        <>
            <ListItem
                button
                component={routerLink}
                to={link.url}
                href={link.url}
                color={"textPrimary"}
                variant="h3"
                onClick={handleExpand}
            >
                <ListItemText
                    primaryTypographyProps={{
                        variant: "h6",
                        color: "textPrimary",
                    }}
                    primary={link.name}
                />
                {link.subList && link.subList.length > 0 && (
                    <ExpandMoreIcon size="inherit" />
                )}
            </ListItem>
            {link.subList && link.subList.length > 0 && (
                <Collapse in={expand} timeout="auto" unmountOnExit>
                    {link.subList.map((subLink, index) => {
                        return (
                            <DrawerLink
                                link={subLink}
                                key={index}
                                handleDrawerToggle={handleDrawerToggle}
                            />
                        );
                    })}
                </Collapse>
            )}
        </>
    );
}
