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

    // 이전
    const goBack = useCallback(() => history.push('/icoSubmit'), []);

    // ICO 등록
    const onRegisterIco = useCallback(() => {
        window.open('/ico');
        localStorage.setItem("test", "test ?");
        // let frmPop = document.getElementsByName("frm");
        // let url = `/${serverProtocol}${serverURL}/ico`;
        // window.open('', 'icoRegister');
        //
        // frmPop.action = url;
        // frmPop.target = 'icoRegister';
        // frmPop.submit();
    }, []);

    // 삭제
    const onDelete = useCallback(async() => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {

            } catch(e) {

            }
        }
    }, [window]);


    return (
        <IcoSubmitDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            onDelete={onDelete}
            goBack={goBack}
            onRegisterIco={onRegisterIco}
        />
    )
}

export default IcoSubmitDetailContainer;