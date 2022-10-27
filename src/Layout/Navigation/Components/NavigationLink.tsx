import {Link} from "react-router-dom";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {MenuItemElement, NavigationLinkVariant} from "../../type";

const LinkComponentRow = styled('span')(({theme}) => ({
    color: "#fff",
}));

const LinkComponentCell = styled('span')(({theme}) => ({
    color: "#000",
}));

export interface NavigationLinkProps {
    item: MenuItemElement,
    handleCloseNavMenu: () => void,
    variant: NavigationLinkVariant
}

export const NavigationLink = (prop: NavigationLinkProps) => {
    const {item, handleCloseNavMenu, variant} = prop;

    const LinkComponent = (variant === 'horizontal')  ? LinkComponentRow : LinkComponentCell;

    return (
        <Link to={item.href}>
            <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{display: "block"}}>
                    <LinkComponent>{item.label}</LinkComponent>
                </Typography>
            </MenuItem>
        </Link>
    );
};