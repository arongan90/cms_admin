import React, {useCallback, useState} from 'react';
import SubscriberPresentation from "./SubscriberPresentation";

const SubscriberContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // Header Tab 매뉴
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <SubscriberPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default SubscriberContainer;