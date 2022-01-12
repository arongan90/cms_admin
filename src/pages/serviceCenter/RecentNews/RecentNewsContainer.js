import React, { useState } from 'react';
import RecentNewsPresentation from "./RecentNewsPresentation";

const RecentNewsContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    const handleTabMenu = value => setTabMenu(value);

    return (
        <RecentNewsPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default RecentNewsContainer;