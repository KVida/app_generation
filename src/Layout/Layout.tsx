import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {menuItems} from "../common/constants";
import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {NavigationLink} from "./Navigation/NavigationLink";

const ItemContentThemeComponent = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "0 0 25px 25px",
    height: "85vh",
}));





export const Layout = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xs">

                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={!!anchorElNav}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {menuItems.map((menuItem) => (

                                    <NavigationLink
                                        key={menuItem.id}
                                        href={menuItem.href}
                                        label={menuItem.label}
                                        handleCloseNavMenu={handleCloseNavMenu}
                                        isRow={false}
                                    />

                                ))}
                            </Menu>

                        </Box>

                        <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                                {menuItems.map((menuItem) => (
                                    <NavigationLink
                                        key={menuItem.id}
                                        href={menuItem.href}
                                        label={menuItem.label}
                                        handleCloseNavMenu={handleCloseNavMenu}
                                        isRow={true}
                                    />
                                ))}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
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
        </div>
    );
};