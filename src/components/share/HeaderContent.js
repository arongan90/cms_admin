import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import colors from '../../styles/colors';
// import { isLogout } from "../../modules/auth";
// import { useDispatch } from "react-redux";
// import {toast} from "react-toastify";
// import {useHistory} from "react-router-dom";


const lightColor = 'rgba(255, 255, 255, 0.7)';

const HeaderContent = (props) => {
    const { onDrawerToggle, onLogout, handleTabMenu, tabMenu, title, tabList } = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Link
                                href="http://172.16.1.192:3000/"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: colors.whiteColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Union HomePage
                            </Link>
                        </Grid>

                        <Grid item>
                            <Button
                                sx={{ borderColor: lightColor, fontWeight: 600, marginLeft: 2 }}
                                variant="outlined"
                                color="inherit"
                                size="medium"
                                onClick={onLogout}
                            >
                                Log Out
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Tabs value={tabMenu} textColor="inherit">
                    {tabList[0] && <Tab onClick={() => handleTabMenu(0)} label={tabList[0]} /> }
                    {tabList[1] && <Tab onClick={() => handleTabMenu(1)} label={tabList[1]} /> }
                    {tabList[2] && <Tab onClick={() => handleTabMenu(2)} label={tabList[2]} /> }
                    {tabList[3] && <Tab onClick={() => handleTabMenu(3)} label={tabList[3]} /> }
                </Tabs>
            </AppBar>
        </React.Fragment>
    );
}

HeaderContent.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
};

export default HeaderContent;