import React, { useState, useCallback } from 'react';
import CryptocurrencyApiPresentation from "./CryptocurrencyApiPresentation";
import {useHistory} from "react-router-dom";

const CryptocurrencyApiContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const history = useHistory();

    const handleTabMenu = value => setTabMenu(value);

    const onAiUpdate = useCallback(async () => {
        history.push(`/apiUpdate`)
    }, []);


    return (
        <CryptocurrencyApiPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            onAiUpdate={onAiUpdate}
        />
    )
}

export default CryptocurrencyApiContainer;