import React, {useCallback, useState} from 'react';
import IcoSubmitDetailPresenter from "./IcoSubmitDetailPresenter";
import * as constants from "../../../utils/constants";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const IcoSubmitDetailContainer = () => {
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [icoData, setIcoData] = useState({});

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // ICO 등록
    const onRegisterIco = useCallback(() => {
        window.open('/ico');
    }, []);


    return (
        <IcoSubmitDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            onRegisterIco={onRegisterIco}
        />
    )
}

export default IcoSubmitDetailContainer;