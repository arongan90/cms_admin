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
                    CMS 관리자
                </ListItem>
                <Box sx={{bgcolor: colors.deepNavyColor}}>
                    <SideTitle
                        title="관리자 계정관리"
                        active={currentPath === "/admin"}
                        onClick={() => onRouteClick("/admin")}
                    />
                    <SideTitle
                        title="회원 관리"
                        active={currentPath === "/member"}
                        onClick={() => onRouteClick("/member")}
                    />
                    <SideTitle
                        title="ICO 정보"
                        active={currentPath === "/ico" || currentPath.split('/')[1] === "icoDetail" || currentPath.split('/')[1] === "icoUpdate"}
                        onClick={() => onRouteClick("/ico")}
                    />
                    <SideTitle
                        title="암호화폐"
                        onClick={() => onRouteClick("/coinInfo")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/coinInfo" || currentPath.split('/')[1] === "coinInfoDetail" || currentPath === "/category" || currentPath === "/tag" || currentPath === "/nft" || currentPath === "/relatedNews"}
                        length={4}>
                        <SideTabMenu
                            title="코인 정보"
                            active={currentPath === "/coinInfo" || currentPath.split('/')[1] === "coinInfoDetail"}
                            onClick={() => onRouteClick("/coinInfo")}
                        />
                        <SideTabMenu
                            title="카테고리"
                            active={currentPath === "/category"}
                            onClick={() => onRouteClick("/category")}
                        />
                        {/*<SideTabMenu
                            title="태그"
                            active={currentPath === "/tag"}
                            onClick={() => onRouteClick("/tag")}
                        />*/}
                        <SideTabMenu
                            title="NFT 콜렉션"
                            active={currentPath === "/nft"}
                            onClick={() => onRouteClick("/nft")}
                        />
                        <SideTabMenu
                            title="관련 뉴스"
                            active={currentPath === "/relatedNews"}
                            onClick={() => onRouteClick("/relatedNews")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="거래소"
                        active={currentPath === "/trade" || currentPath.split('/')[1] === "tradeDetail"}
                        onClick={() => onRouteClick("/trade")}
                    />
                    <SideTitle
                        title="상품"
                        onClick={() => onRouteClick("/api")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/api" || currentPath === "/calculation"}
                        length={2}
                    >
                        <SideTabMenu
                            title="암호화폐 API"
                            active={currentPath === "/api"}
                            onClick={() => onRouteClick("/api")}
                        />
                        <SideTabMenu
                            title="산정방법"
                            active={currentPath === "/calculation"}
                            onClick={() => onRouteClick("/calculation")}

                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="고객센터"
                        onClick={() => onRouteClick("/recentNews")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/recentNews" || currentPath === "/faq" || currentPath === "/service" || currentPath === "/term" || currentPath === "/privacy" || currentPath === "/escapeClause" || currentPath === "/cookie" || currentPath.split('/')[1] === "recentNewsDetail" || currentPath.split('/')[1] === "faqUpdate"}
                        length={6}
                    >
                        <SideTabMenu
                            title="최근 소식"
                            active={currentPath === "/recentNews" || currentPath.split('/')[1] === "recentNewsDetail"}
                            onClick={() => onRouteClick("/recentNews")}
                        />
                        <SideTabMenu
                            title="FAQ"
                            active={currentPath === "/faq" || currentPath.split('/')[1] === "faqUpdate"}
                            onClick={() => onRouteClick("/faq")}
                        />
                        <SideTabMenu
                            title="서비스 소개"
                            active={currentPath === "/service"}
                            onClick={() => onRouteClick("/service")}
                        />
                        <SideTabMenu
                            title="이용 약관"
                            active={currentPath === "/term"}
                            onClick={() => onRouteClick("/term")}
                        />
                        <SideTabMenu
                            title="개인정보 취급방침"
                            active={currentPath === "/privacy"}
                            onClick={() => onRouteClick("/privacy")}
                        />
                        <SideTabMenu
                            title="면책 조항"
                            active={currentPath === "/escapeClause"}
                            onClick={() => onRouteClick("/escapeClause")}
                        />
                        <SideTabMenu
                            title="쿠키 정책"
                            active={currentPath === "/cookie"}
                            onClick={() => onRouteClick("/cookie")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="문의/신고"
                        onClick={() => onRouteClick("/qna")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/qna" || currentPath.split('/')[1] === "qnaDetail" || currentPath === "/errorReport" || currentPath === "/icoSubmit" || currentPath.split('/')[1] === "icoSubmitDetail"}
                        length={3}
                    >
                        <SideTabMenu
                            title="온라인 문의"
                            active={currentPath === "/qna" || currentPath.split('/')[1] === "qnaDetail"}
                            onClick={() => onRouteClick("/qna")}
                        />
                        <SideTabMenu
                            title="오류 신고"
                            active={currentPath === "/errorReport"}
                            onClick={() => onRouteClick("/errorReport")}
                        />
                        <SideTabMenu
                            title="ICO 제출"
                            active={currentPath === "/icoSubmit" || currentPath.split('/')[1] === "icoSubmitDetail"}
                            onClick={() => onRouteClick("/icoSubmit")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="설정"
                        onClick={() => onRouteClick("/language")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/language" || currentPath === "/currency" || currentPath === "/priceNotice"}
                        length={3}
                    >
                        <SideTabMenu
                            title="언어"
                            active={currentPath === "/language"}
                            onClick={() => onRouteClick("/language")}
                        />
                        <SideTabMenu
                            title="화폐"
                            active={currentPath === "/currency"}
                            onClick={() => onRouteClick("/currency")}
                        />
                        <SideTabMenu
                            title="가격 알림"
                            active={currentPath === "/priceNotice"}
                            onClick={() => onRouteClick("/priceNotice")}
                        />
                    </VisibleWrapper>
                    <SideTitle
                        title="메일링"
                        onClick={() => onRouteClick("/newsLetter")}
                    />
                    <VisibleWrapper
                        active={currentPath === "/newsLetter" || currentPath === "/subscriber" || currentPath === "/mailing" || currentPath.split('/')[1] === "newsLetterDetail"}
                        length={3}
                    >
                        <SideTabMenu
                            title="뉴스레터"
                            active={currentPath === "/newsLetter" || currentPath.split('/')[1] === "newsLetterDetail"}
                            onClick={() => onRouteClick("/newsLetter")}
                        />
                        <SideTabMenu
                            title="뉴스레터 구독자"
                            active={currentPath === "/subscriber"}
                            onClick={() => onRouteClick("/subscriber")}
                        />
                        <SideTabMenu
                            title="홍보 메일"
                            active={currentPath === "/mailing"}
                            onClick={() => onRouteClick("/mailing")}
                        />
                    </VisibleWrapper>
                </Box>
            </List>
        </Drawer>
    );
}