import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { AccountURL, HomeURL, NewProjectURL, ProjectURL, SettingsURL } from './Constants';

type NotifyAppBarHeight = (height: number) => void;

export interface IAppBarMenuProps {
    notifyAppBarHeight: NotifyAppBarHeight;
}

interface IAppBarMenuState {
    appBarHeight: number;
}

export type HideDialog = () => void;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const drawerWidth = 260;

export default function AppBarMenu(props: IAppBarMenuProps) {
    const theme = useTheme();
    const appBarRef = useRef(null);
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [state, setState] = useState<IAppBarMenuState>(createInitialState());

    useEffect(() => {
        const height = (appBarRef.current) ? appBarRef.current.clientHeight : 0;

        if (height > 0) {
            setState({ ...state, appBarHeight: height });
            props.notifyAppBarHeight(height);
        }
    }, [appBarRef.current, (appBarRef.current) ? appBarRef.current.clientHeight : null]);

    function closeDrawer() {
        setDrawerOpen(false);
    }

    function createInitialState(): IAppBarMenuState {
        return {
            appBarHeight: 0
        }
    }

    function newProject() {
        navigate(NewProjectURL);
        closeDrawer();
    }


    function openAccount() {
        navigate(AccountURL);
        closeDrawer();
    }

    function openDrawer() {
        setDrawerOpen(true);
    }

    function openHome() {
        navigate(HomeURL);
        closeDrawer();
    }

    function openProject() {
        navigate(ProjectURL);
        closeDrawer();
    }

    function openSettings() {
        navigate(SettingsURL);
        closeDrawer();
    }

    const appBarHeight = (appBarRef.current) ? appBarRef.current.clientHeight : 0;
    const drawerMenuHeight = window.innerHeight - appBarHeight;
    const paddingCSS: CSSProperties = { padding: '0px' };

    return (
        <React.Fragment>
            <AppBar ref={appBarRef} position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={openDrawer}
                        edge="start"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <MenuItem onClick={newProject}>
                        <Typography textAlign="center">New Project</Typography>
                    </MenuItem>
                    <MenuItem onClick={openProject}>
                        <Typography textAlign="center">Projects</Typography>
                    </MenuItem>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <React.Fragment>
                        <Tooltip title="Settings">
                            <IconButton color="inherit" onClick={openSettings}>
                                <SettingsIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Account">
                            <IconButton color="inherit" onClick={openAccount}>
                                <AccountCircleIcon />
                            </IconButton>
                        </Tooltip>
                    </React.Fragment>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={drawerOpen}>
                <DrawerHeader>
                    <IconButton onClick={closeDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Box sx={{ height: drawerMenuHeight, overflow: 'auto' }} >
                    <MenuList>
                        <MenuItem sx={paddingCSS} onClick={openHome}>
                            <ListItemButton >
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </MenuItem>

                        <MenuItem sx={paddingCSS} onClick={openAccount}>
                            <ListItemButton >
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Account" />
                            </ListItemButton>
                        </MenuItem>
                        <MenuItem sx={paddingCSS} onClick={openProject}>
                            <ListItemButton >
                                <ListItemText primary="Projects" />
                            </ListItemButton>
                        </MenuItem>
                        <MenuItem sx={paddingCSS} onClick={openSettings}>
                            <ListItemButton >
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </MenuItem>
                    </MenuList>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}