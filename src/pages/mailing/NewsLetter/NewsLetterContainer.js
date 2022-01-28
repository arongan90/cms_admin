import React, {useCallback, useState} from 'react';
import NewsLetterPresentation from "./NewsLetterPresentation";

const NewsLetterContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <NewsLetterPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
        />
    )
}

export default NewsLetterContainer;