import React, {useEffect, useState, useCallback} from "react";
import GlobalStyles from "./styles/GlobalStyles";
import styled, { css } from "styled-components";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./Router";
import {useDispatch} from "react-redux";
import {setToken} from "./modules/auth";
import {useHistory} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navigator from "./components/layout/Navigator";

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#081627',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#4fc3f7',
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

const ComponentWrapper = styled.div`
  ${({ isLoggedIn }) => isLoggedIn && css `
    padding-left: 256px;
    
    @media screen and (max-width: 600px) {
        padding-left: 0;
    }
  `}
`;

function App() {
    const drawerWidth = 256;
    const dispatch = useDispatch();
    const history = useHistory();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = useCallback(() => setMobileOpen(!mobileOpen), [mobileOpen]);

    const previousLoading = useCallback(async () => {
        try {
            const token = await localStorage.getItem("token");

            if (!!token) {
                dispatch(setToken(token));
                setIsLoggedIn(token);
                history.push('/');
            } else {
                history.push('/login');
            }
        } catch (e) {
            toast.error(e);
        }
    }, [dispatch, history]);

    useEffect(() => {
        previousLoading();
    }, [previousLoading, isLoggedIn]);

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position={toast.POSITION.TOP_RIGHT}/>
            <GlobalStyles/>
            <CssBaseline/>
            {isLoggedIn &&
                <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                    {isSmUp ? null : (
                        <Navigator
                            PaperProps={{style: {width: drawerWidth}}}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    )}
                    <Navigator PaperProps={{style: {width: drawerWidth}}} sx={{display: {sm: 'block', xs: 'none'}}}/>
                </Box>
            }
            <ComponentWrapper isLoggedIn={isLoggedIn}>
                <AppRouter isLoggedIn={isLoggedIn}/>
            </ComponentWrapper>
        </ThemeProvider>

    );
}

export default App;
