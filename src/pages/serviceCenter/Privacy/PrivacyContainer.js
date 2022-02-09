import React, {useCallback, useState} from 'react';
import PrivacyPresentation from "./PrivacyPresentation";

const PrivacyContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <PrivacyPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default PrivacyContainer;