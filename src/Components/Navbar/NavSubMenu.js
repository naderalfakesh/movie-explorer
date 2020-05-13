import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavSubMenu({ subList, toggleMenu }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // toggleMenu != null
    //     ? setAnchorEl(toggleMenu.currentTarget)
    //     : setAnchorEl(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Menu
            id="simple-menu"
            anchorEl={toggleMenu}
            keepMounted
            open={Boolean(toggleMenu)}
            onClose={handleClose}
        >
            {subList.map((item) => (
                <MenuItem onClick={handleClose} key={item.url}>
                    {item.name}
                </MenuItem>
            ))}
        </Menu>
    );
}
