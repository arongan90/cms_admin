import React, {useCallback, useState} from 'react';
import CalculationPresentation from "./CalculationPresentation";

const CalculationContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <CalculationPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default CalculationContainer;