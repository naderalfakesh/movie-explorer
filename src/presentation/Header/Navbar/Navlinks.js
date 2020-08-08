import React from "react";
import NavLink from "./NavLink";

export default function Navlinks({ linksList }) {
    return (
        <div>
            {linksList.map((link, i) => (
                <NavLink
                    key={link.url}
                    url={link.url}
                    name={link.name}
                    subList={link.subList}
                />
            ))}
        </div>
    );
}
