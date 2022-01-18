import React, {useCallback, useState} from 'react';
import QnaPresentation from "./QnaPresentation";

const QnaContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <QnaPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default QnaContainer;