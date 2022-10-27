import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {menuItems} from "../../../common/constants";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {NavigationLink} from "./NavigationLink";
import {Nullable} from "../../../common/type";

interface MenuComponentProps {
}

export const MenuComponent = (props: MenuComponentProps) => {
    const [anchorElNav, setAnchorElNav] = useState<Nullable<HTMLElement>>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
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
                                    item={menuItem}
                                    handleCloseNavMenu={handleCloseNavMenu}
                                    variant='vertical'
                                />
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {menuItems.map((menuItem) => (
                            <NavigationLink
                                key={menuItem.id}
                                item={menuItem}
                                handleCloseNavMenu={handleCloseNavMenu}
                                variant='horizontal'
                            />
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}