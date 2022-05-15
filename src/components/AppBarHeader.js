import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logo from "../logoIcs.png";

const settings = ["Profile", "Logout"];

const AppBarHeader = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ background: "#134B8A" }}>
                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                        <IconButton href="/">
                            <Avatar variant="rounded" alt="Logo" src={logo} />
                        </IconButton>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                                <Badge color="error" variant="dot" overlap="circular">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Typography variant="overline" sx={{ ml: "10px" }}>
                                Account Name
                            </Typography>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <KeyboardArrowDownIcon sx={{ color: "#FFFFFF" }} />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
};
export default AppBarHeader;
