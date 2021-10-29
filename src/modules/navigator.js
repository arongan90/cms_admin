import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerIcon from "@mui/icons-material/Timer";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";

export const SET_CATEGORY = "SET_CATEGORY";
export const RESET_CATEGORY = "RESET_CATEGORY";

export const setCategory = id => ({ type: SET_CATEGORY, id });
export const resetCategory = () => ({ type: RESET_CATEGORY });

const initialState = [
    {
        id: '관리자 계정관리',
        path: '/admin',
        active: false,
    },
    {
        id: '회원관리',
        children: [
            {id: 'Analytics', icon: <SettingsIcon/>},
        ],
    },
    {
        id: 'ICO 정보',
        children: [
            {id: 'Analytics', icon: <SettingsIcon/>},
        ],
    },
    {
        id: '암호화폐',
        children: [
            {
                id: '코인 정보',
                icon: <PersonAddIcon/>,
                active: true,
            },
            {
                id: '카테고리',
                icon: <PeopleIcon/>,
                active: false,
            },
            {
                id: '태그',
                icon: <DnsRoundedIcon/>,
                active: false,
            },
            {
                id: 'NFT 콜렉션',
                icon: <PermMediaOutlinedIcon/>,
                active: false,
            },
            {
                id: '관련 뉴스',
                icon: <PublicIcon/>,
                active: false,
            },
        ],
    },
    {
        id: '거래소',
        children: [
            {id: '거래소 추가', icon: <SettingsIcon/>},
            {id: '거래소 수정', icon: <SettingsIcon/>},
        ],
    },
    {
        id: '상품',
        children: [
            {id: '암호화폐 API', icon: <SettingsIcon/>},
            {id: '산정 방법', icon: <SettingsIcon/>},
        ],
    },
    {
        id: '고객센터',
        children: [
            {id: '최근 소식', icon: <SettingsIcon/>},
            {id: '서비스 소개', icon: <SettingsIcon/>},
            {id: '이용 약관', icon: <SettingsIcon/>},
            {id: '개인정보 취급방침', icon: <SettingsIcon/>},
            {id: '면책 조항', icon: <SettingsIcon/>},
            {id: '쿠키 정책', icon: <SettingsIcon/>},
        ],
    },
    {
        id: '문의/신고',
        children: [
            {id: '온라인 문의', icon: <SettingsIcon/>},
            {id: '오류 신고', icon: <SettingsIcon/>},
            {id: 'ICO 제출', icon: <SettingsIcon/>},
        ],
    },
    {
        id: '설정',
        children: [
            {id: '언어', icon: <SettingsIcon/>},
            {id: '화폐', icon: <SettingsIcon/>},
            {id: '가격 알림', icon: <SettingsIcon/>},
        ],
    },
    {
        id: '메일링',
        children: [
            {id: '뉴스레터', icon: <SettingsIcon/>},
            {id: '뉴스레터 구독자', icon: <SettingsIcon/>},
            {id: '홍보 메일', icon: <SettingsIcon/>},
        ],
    },
];

export default function navigator(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:

            return state.map(list => {
             return list.id === action.id
                    ? {...list, active: !!list.active ? list.active : !list.active}
                    : {...list, active: false}
            });
        case RESET_CATEGORY:
            return initialState;
        default:
            return state;
    }
}