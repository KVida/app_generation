import Grid from "@mui/material/Grid";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {ColorPalett} from "../../../common/constantsColor";

interface ContentComponentProps {
}

const ItemContentThemeComponent = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? ColorPalett.background_color_dark : ColorPalett.background_color_light,  // all "magic" strings to const colors is better to group under one object (e.g. ColorPalett)
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "0 0 25px 25px",
    height: "85vh",
}));

export const ContentComponent = (props: ContentComponentProps) => {

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={10}>
                    <ItemContentThemeComponent>
                        {/*render page*/}
                        <Outlet/>
                    </ItemContentThemeComponent>
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
        </Box>
    );
}