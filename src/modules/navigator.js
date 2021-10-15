import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
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
            {id: '회원 관리', icon: <PeopleIcon/>, active: true },
            {id: '로고 설정', icon: <PersonAddIcon/>, active: false },
            {id: 'Database', icon: <DnsRoundedIcon/>, active: false },
            {id: 'Storage', icon: <PermMediaOutlinedIcon/>, active: false },
            {id: 'Hosting', icon: <PublicIcon/>, active: false },
            {id: 'Functions', icon: <SettingsEthernetIcon/>, active: false },
            {id: 'Analytics', icon: <SettingsIcon/>, active: false },
            {id: 'Performance', icon: <TimerIcon/>, active: false },
            {id: 'Test Lab', icon: <PhonelinkSetupIcon/>, active: false },
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