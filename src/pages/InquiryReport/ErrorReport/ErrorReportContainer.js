import React, {useCallback, useState} from 'react';
import ErrorReportPresentation from "./ErrorReportPresentation";

const ErrorReportContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <ErrorReportPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default ErrorReportContainer;