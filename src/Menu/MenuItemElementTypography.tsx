import {Link} from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";

interface MenuItemProps {
    href: string
    label: string
}

export const MenuItemElementTypography = (prop: MenuItemProps) => {
    const {href, label} = prop;

    return (
        <Button sx={{my: 2, color: "white", display: "block"}}>
            <Link to={href} style={{color: "black", textDecoration: "none"}}>{label}</Link>
        </Button>

    );
};