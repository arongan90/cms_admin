import React, {useState, useCallback, useEffect} from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import colors from "../../styles/colors";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import HomeIcon from '@mui/icons-material/Home';
// import {useDispatch, useSelector, shallowEqual} from "react-redux";

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};
const SideBox = styled(Box)`
  background-color: ${colors.deepNavyColor};

  &:hover {
    color: ${colors.activeBlue};
  }
`;
const SideListMenu = styled(ListItemText)`
  color: ${colors.whiteColor};

  ${({active}) => (active === 'true') && css`
    color: ${colors.hoverBlue};
    font-weight: bold;
  `}
`;
const SideList = styled(ListItem)`
  color: ${colors.whiteColor};
  cursor: pointer;

  &:hover {
    ${SideListMenu} {
      color: ${colors.hoverBlue};
      font-weight: bold;
    }
  }
`;
const VisibleWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.5s;
  ${({active, length}) => !!active && css`
    height: calc(32px * ${length});
  `}
`;

const SideTitle = ({title, active = false, onClick}) => (
    <SideBox>
        <SideList sx={{py: 1, px: 3}} onClick={onClick}>
            <SideListMenu active={active ? 'true' : 'false'}>{title}</SideListMenu>
        </SideList>
        <Divider/>
    </SideBox>
);

const SideTabMenu = ({title, active, onClick}) => (
    <SideList disablePadding onClick={onClick}>
        <ListItemButton selected={active} sx={item}>
            <SideListMenu active={active ? 'true' : 'false'}>- {title}</SideListMenu>
        </ListItemButton>
    </SideList>
);

export default function Navigator(props) {
    const {...other} = props;
    const [currentPath, setCurrentPath] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const history = useHistory();

    const onRouteClick = useCallback(link => {
        // const replace = link.replace("/", "");

        history.push(link);
        setIsClicked(!isClicked);
    }, [isClicked]);

    useEffect(() => {
        setCurrentPath(history.location.pathname);
    }, [history, history.location.pathname, isClicked]);

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem
                    sx={{...item, ...itemCategory, fontSize: 22, color: colors.whiteColor, cursor: 'pointer'}}
                    onClick={() => onRouteClick("/")}
                >
                    CMS ?????????
                </ListItem>
                <Box sx={{bgcolor: colors.deepNavyColor}}>
                    <SideTitle
                        title="????????? ????????????"
                        active={currentPath === "/admin"}
                        onClick={() => onRouteClick("/admin")}
                    />
                    <SideTitle
                        title="?????? ??????"
                        active={currentPath === "/member"}
                        onClick={() => onRouteClick("/member")}
                    />
                    <SideTitle
                        title="ICO ??????"
                        active={currentPath === "/ico" || currentPath.split('/')[1] === "icoDetail" || currentPath.split('/')[1] === "icoUpdate"}
                        onClick={() => onRouteClick("/ico")}
                    />
                    <SideTitle
                        title="????????????"
                        onClick={() => onRouteClick("/coinInfo")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/coinInfo" || currentPath.split('/')[1] === "coinInfoDetail" || currentPath === "/category" || currentPath === "/tag" || currentPath === "/nft" || currentPath === "/relatedNews"}
                        length={4}>
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/coinInfo" || currentPath.split('/')[1] === "coinInfoDetail"}
                            onClick={() => onRouteClick("/coinInfo")}
                        />
                        <SideTabMenu
                            title="????????????"
                            active={currentPath === "/category"}
                            onClick={() => onRouteClick("/category")}
                        />
                        {/*<SideTabMenu
                            title="??????"
                            active={currentPath === "/tag"}
                            onClick={() => onRouteClick("/tag")}
                        />*/}
                        <SideTabMenu
                            title="NFT ?????????"
                            active={currentPath === "/nft"}
                            onClick={() => onRouteClick("/nft")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/relatedNews"}
                            onClick={() => onRouteClick("/relatedNews")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="?????????"
                        active={currentPath === "/trade" || currentPath.split('/')[1] === "tradeDetail"}
                        onClick={() => onRouteClick("/trade")}
                    />
                    <SideTitle
                        title="??????"
                        onClick={() => onRouteClick("/api")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/api" || currentPath === "/calculation"}
                        length={2}
                    >
                        <SideTabMenu
                            title="???????????? API"
                            active={currentPath === "/api"}
                            onClick={() => onRouteClick("/api")}
                        />
                        <SideTabMenu
                            title="????????????"
                            active={currentPath === "/calculation"}
                            onClick={() => onRouteClick("/calculation")}

                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="????????????"
                        onClick={() => onRouteClick("/recentNews")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/recentNews" || currentPath === "/faq" || currentPath === "/service" || currentPath === "/term" || currentPath === "/privacy" || currentPath === "/escapeClause" || currentPath === "/cookie" || currentPath.split('/')[1] === "recentNewsDetail" || currentPath.split('/')[1] === "faqUpdate"}
                        length={6}
                    >
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/recentNews" || currentPath.split('/')[1] === "recentNewsDetail"}
                            onClick={() => onRouteClick("/recentNews")}
                        />
                        <SideTabMenu
                            title="FAQ"
                            active={currentPath === "/faq" || currentPath.split('/')[1] === "faqUpdate"}
                            onClick={() => onRouteClick("/faq")}
                        />
                        <SideTabMenu
                            title="????????? ??????"
                            active={currentPath === "/service"}
                            onClick={() => onRouteClick("/service")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/term"}
                            onClick={() => onRouteClick("/term")}
                        />
                        <SideTabMenu
                            title="???????????? ????????????"
                            active={currentPath === "/privacy"}
                            onClick={() => onRouteClick("/privacy")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/escapeClause"}
                            onClick={() => onRouteClick("/escapeClause")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/cookie"}
                            onClick={() => onRouteClick("/cookie")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="??????/??????"
                        onClick={() => onRouteClick("/qna")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/qna" || currentPath.split('/')[1] === "qnaDetail" || currentPath === "/errorReport" || currentPath === "/icoSubmit" || currentPath.split('/')[1] === "icoSubmitDetail"}
                        length={3}
                    >
                        <SideTabMenu
                            title="????????? ??????"
                            active={currentPath === "/qna" || currentPath.split('/')[1] === "qnaDetail"}
                            onClick={() => onRouteClick("/qna")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/errorReport"}
                            onClick={() => onRouteClick("/errorReport")}
                        />
                        <SideTabMenu
                            title="ICO ??????"
                            active={currentPath === "/icoSubmit" || currentPath.split('/')[1] === "icoSubmitDetail"}
                            onClick={() => onRouteClick("/icoSubmit")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="??????"
                        onClick={() => onRouteClick("/language")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/language" || currentPath === "/currency" || currentPath === "/priceNotice"}
                        length={3}
                    >
                        <SideTabMenu
                            title="??????"
                            active={currentPath === "/language"}
                            onClick={() => onRouteClick("/language")}
                        />
                        <SideTabMenu
                            title="??????"
                            active={currentPath === "/currency"}
                            onClick={() => onRouteClick("/currency")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/priceNotice"}
                            onClick={() => onRouteClick("/priceNotice")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="?????????"
                        onClick={() => onRouteClick("/newsLetter")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/newsLetter" || currentPath === "/subscriber" || currentPath === "/mailing" || currentPath.split('/')[1] === "newsLetterDetail"}
                        length={3}
                    >
                        <SideTabMenu
                            title="????????????"
                            active={currentPath === "/newsLetter" || currentPath.split('/')[1] === "newsLetterDetail"}
                            onClick={() => onRouteClick("/newsLetter")}
                        />
                        <SideTabMenu
                            title="???????????? ?????????"
                            active={currentPath === "/subscriber"}
                            onClick={() => onRouteClick("/subscriber")}
                        />
                        <SideTabMenu
                            title="?????? ??????"
                            active={currentPath === "/mailing"}
                            onClick={() => onRouteClick("/mailing")}
                        />
                    </VisibleWrapper>
                </Box>
            </List>
        </Drawer>
    );
}