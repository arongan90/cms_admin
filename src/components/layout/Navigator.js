import React, {useState, useCallback, useEffect} from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {setCategory} from "../../modules/navigator";
import {Link, useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import colors from "../../styles/colors";

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

  ${({active}) => active && css`
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
  ${({ active, length }) => active && css`
    height: calc(32px * ${length});
  `}
`;

const SideTitle = ({title, tabMenu, path = "", active = false}) => {
    console.info(typeof active);
    return (
        <SideBox active={active}>
            <SideList sx={{py: 1, px: 3}}>
                <SideListMenu active={active}>{title}</SideListMenu>
            </SideList>

            {tabMenu &&
            <SideTabMenu
                tabMenu={tabMenu}
                active={active}
                onRouteButton-onRouteButton
            />
            }
            <Divider/>
        </SideBox>
    );
}
const SideTabMenu = ({tabMenu, active, onRouteButton}) => (
    tabMenu.map(menu => (
        <VisibleWrapper active={active} length={tabMenu.length} key={menu.title}>
            <SideList disablePadding key={menu.title} onClick={() => onRouteButton(menu.path)}>
                <ListItemButton selected={menu.active} sx={item}>
                    <SideListMenu>- {menu.title}</SideListMenu>
                </ListItemButton>
            </SideList>
        </VisibleWrapper>))
);

export default function Navigator(props) {
    const {...other} = props;
    const [currentPath, setCurrentPath] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const history = useHistory();

    const onRouteButton = useCallback(link => {
        const replace = link.replace("/", "");

        history.push(link);
        setIsClicked(!isClicked);
    }, []);

    useEffect(() => {
        setCurrentPath(history.location.pathname);
    }, [history.location.pathname, isClicked]);


    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{...item, ...itemCategory, fontSize: 22, color: '#fff'}}>
                    CMS 관리자
                </ListItem>
                <Box sx={{bgcolor: colors.deepNavyColor}}>
                    <SideTitle
                        title="관리자 계정관리"
                        path="/admin"
                        active={currentPath === "/admin"}
                    />
                    <SideTitle
                        title="회원관리"
                        path="/member"
                        active={currentPath === "/member"}
                    />
                    <SideTitle
                        title="ICO 정보"
                        path="/ico"
                        active={currentPath === "/ico"}
                    />
                    <SideTitle
                        title="암호화폐"
                        active={currentPath === "/coinInfo" || currentPath === "/category" || currentPath === "/tag" || currentPath === "/nft" || currentPath === "/relatedNews"}
                        tabMenu={[
                            {
                                title: "코인 정보",
                                path: "/coinInfo",
                                active: false,
                            },
                            {
                                title: "카테고리",
                                path: "/category",
                                active: false,
                            },
                            {
                                title: "태그",
                                path: "/tag",
                                active: false,
                            },
                            {
                                title: "NFT 콜렉션",
                                path: "/nft",
                                active: false,
                            },
                            {
                                title: "관련 뉴스",
                                path: "/relatedNews",
                                active: false,
                            }
                        ]}
                    />
                    <SideTitle
                        title="거래소"
                        path="/trade"
                        active={currentPath === "/trade"}
                    />
                    <SideTitle
                        title="상품"
                        active={currentPath === "/api" || currentPath === "/calculation"}
                        tabMenu={[
                            {
                                title: "암호화폐 API",
                                path: "/api",
                                active: currentPath === "/api",
                            },
                            {
                                title: "산정방법",
                                path: "/calculation",
                                active: currentPath === "/calculation",
                            }
                        ]}
                    />
                    <SideTitle
                        title="고객센터"
                        active={currentPath === "/recentNews" || currentPath === "/service" || currentPath === "/term" || currentPath === "/privacy" || currentPath === "/escapeClause" || currentPath === "/cookie"}
                        tabMenu={[
                            {
                                title: "최근 소식",
                                path: "/recentNews",
                                active: currentPath === "/recentNews",
                            },
                            {
                                title: "서비스 소개",
                                path: "/service",
                                active: currentPath === "/service",
                            },
                            {
                                title: "이용 약관",
                                path: "/term",
                                active: currentPath === "/term",
                            },
                            {
                                title: "개인정보 취급방침",
                                path: "/privacy",
                                active: currentPath === "/privacy",
                            },
                            {
                                title: "면책 조항",
                                path: "/escapeClause",
                                active: currentPath === "/escapeClause",
                            },
                            {
                                title: "쿠키 정책",
                                path: "/cookie",
                                active: currentPath === "/cookie",
                            }
                        ]}
                    />
                    <SideTitle
                        title="문의/신고"
                        active={currentPath === "/qna" || currentPath === "/bugReport" || currentPath === "/icoSubmit"}
                        tabMenu={[
                            {
                                title: "온라인 문의",
                                path: "/qna",
                                active: currentPath === "/qna",
                            },
                            {
                                title: "오류 신고",
                                path: "/errorReport",
                                active: currentPath === "/errorReport",
                            },
                            {
                                title: "ICO 제출",
                                path: "/icoSubmit",
                                active: currentPath === "/icoSubmit",
                            }
                        ]}
                    />
                    <SideTitle
                        title="설정"
                        active={currentPath === "/api" || currentPath === "/currency" || currentPath === "/priceNotice"}
                        tabMenu={[
                            {
                                title: "언어",
                                path: "/language",
                                active: currentPath === "/language",
                            },
                            {
                                title: "화폐",
                                path: "/currency",
                                active: currentPath === "/currency",
                            },
                            {
                                title: "가격 알림",
                                path: "/priceNotice",
                                active: currentPath === "priceNotice",
                            }
                        ]}
                    />
                    <SideTitle
                        title="메일링"
                        active={currentPath === "/newsLetter" || currentPath === "/subscriber" || currentPath === "/mailing"}
                        tabMenu={[
                            {
                                title: "뉴스레터",
                                path: "/newsLetter",
                                active: currentPath === "/newsLetter",
                            },
                            {
                                title: "뉴스레터 구독자",
                                path: "/subscriber",
                                active: currentPath === "/subscriber",
                            },
                            {
                                title: "홍보 메일",
                                path: "/mailing",
                                active: currentPath === "/mailing"
                            }
                        ]}
                    />
                </Box>
            </List>
        </Drawer>
    );
}