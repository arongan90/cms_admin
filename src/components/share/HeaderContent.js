import React, { useState } from 'react';
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Modal } from "@material-ui/core";
import MyInfo from "./MyInfo";
import {toast} from "react-toastify";
import {isLogout} from "../../modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
// import PropTypes from 'prop-types';

const Text = styled.span`
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    font-weight: 700;
  }
`;

const HeaderContent = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { handleTabMenu, tabMenu, title, tabList } = props;
    const lightColor = 'rgba(255, 255, 255, 0.7)';
    const [infoOpen, setInfoOpen] = useState(false);

    const handleInfoOpen = () => setInfoOpen(true);
    const handleInfoClose = () => setInfoOpen(false);

    const onLogout = () => {
        toast.info('정상적으로 로그아웃 되었습니다.');
        dispatch(isLogout());
        history.push(`/`);
    }

    return (
        <>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs />
                        <Grid
                            item
                            onClick={handleInfoOpen}
                        >
                            <Text>관리자 정보</Text>
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
                    {tabList.map((tab, index) => (
                        <Tab key={tab} onClick={() => handleTabMenu(index)} label={tabList[index]} />
                    ))}
                </Tabs>
            </AppBar>

            <Modal
                open={infoOpen}
                onClose={handleInfoClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <>
                    <MyInfo
                        handleInfoClose={handleInfoClose}
                    />
                </>
            </Modal>
        </>
    );
}

export default HeaderContent;