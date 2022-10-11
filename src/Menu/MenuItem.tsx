import {Link} from "react-router-dom";
import * as React from "react";


interface MenuItemProps {
    href: string
    label: string
}

export const MenuItem = (prop: MenuItemProps) => {
    const {href, label} = prop;
    return(
        <li>
            <Link to={href}>{label}</Link>
        </li>
    );
};