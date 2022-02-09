import React, {useCallback, useState} from 'react';
import EscapeClausePresentation from "./EscapeClausePresentation";

const EscapeClauseContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <EscapeClausePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default EscapeClauseContainer;