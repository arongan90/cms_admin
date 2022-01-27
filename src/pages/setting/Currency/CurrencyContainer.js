import React, {useCallback, useState} from 'react';
import CurrencyPresentation from "./CurrencyPresentation";

const CurrencyContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [currency, setCurrency] = useState("");

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    const onCurrencyChange = useCallback(({ target: {value} }) => setCurrency(value), []);

    return (
        <CurrencyPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            currency={currency}
            onCurrencyChange={onCurrencyChange}
        />
    )
}

export default CurrencyContainer;