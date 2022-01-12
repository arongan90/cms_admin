import React, { useState } from 'react';
import CryptocurrencyAPIUpdatePresenter from "./CryptocurrencyAPIUpdatePresenter";

const CryptocurrencyAPIUpdateContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    const handleTabMenu = value => setTabMenu(value);

    return (
        <CryptocurrencyAPIUpdatePresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default CryptocurrencyAPIUpdateContainer;