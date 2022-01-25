import React, {useCallback, useState} from 'react';
import LanguagePresentation from "./LanguagePresentation";

const LanguageContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <LanguagePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default LanguageContainer;