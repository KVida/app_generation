import {Link} from "react-router-dom";
import * as React from "react";
import {NavigationLinkProps} from "../type";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const LinkComponentRow = styled('span')(({theme}) => ({
    color: "#fff",
}));

const LinkComponentCell = styled('span')(({theme}) => ({
    color: "#000",
}));

export const NavigationLink = (prop: NavigationLinkProps) => {
    const {href, label, handleCloseNavMenu, isRow} = prop;

    return (
        <Link to={href}>
            <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{display: "block"}}>
                    {isRow && <LinkComponentRow>{label}</LinkComponentRow>}
                    {!isRow && <LinkComponentCell>{label}</LinkComponentCell>}
                </Typography>
            </MenuItem>
        </Link>
    );
};