import {Typography} from "@mui/material";
import * as React from "react";

interface HeaderPageProps {
    label: string
}

export const HeaderPage = (props: HeaderPageProps) => {
    const {label} = props;

    return(
        <Typography component="h2" sx={{color: "red"}}>{label}</Typography>
    );
}