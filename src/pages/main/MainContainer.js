import React, {useEffect, useState, useRef} from 'react';
import MainPresentational from "./MainPresentational";
import axios from "axios";
import {toast} from "react-toastify";
import {isLogout} from "../../modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {autoHyphenBizNumber, autoHyphenPhoneNumber} from "../../utils/common";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const MainContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const handleTabMenu = value => setTabMenu(value);

    return (
        <MainPresentational
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

        />
    )
}

export default MainContainer;