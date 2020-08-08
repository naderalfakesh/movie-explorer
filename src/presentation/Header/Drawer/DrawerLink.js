import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Collapse } from "@material-ui/core";
import { Link as routerLink } from "react-router-dom";

export default function DrawerLink({ link }) {
    const [expand, setExpand] = React.useState(false);

    const handleExpand = (e) => {
        if (link.subList && link.subList.length > 0) {
            e.preventDefault();
            setExpand(!expand);
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
                    primary={`${link.name} ${
                        link.subList && link.subList.length > 0 ? "⯆" : ""
                    }`}
                />
            </ListItem>
            {link.subList && link.subList.length > 0 && (
                <Collapse in={expand} timeout="auto" unmountOnExit>
                    {link.subList.map((subLink, index) => {
                        return <DrawerLink link={subLink} key={index} />;
                    })}
                </Collapse>
            )}
        </>
    );
}
