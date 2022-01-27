import React, {useCallback, useState, useEffect} from 'react';
import LanguagePresentation from "./LanguagePresentation";

const LanguageContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [updateOpen, setUpdateOpen] = useState(false);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    const handleUpdateOpen = useCallback(() => setUpdateOpen(true), []);
    const handleUpdateClose = useCallback(() => setUpdateOpen(false), []);

    const onUpdateLanguage = useCallback(async () => {
        try {
            console.info('업데이트 진행');
        } catch(e) {
            throw new Error(e);
        }
    }, []);

    const onDeleteLanguage = useCallback(async () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {
                console.info('삭제 진행');
            } catch(e) {
                throw new Error(e);
            }
        }
    }, []);

    return (
        <LanguagePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            updateOpen={updateOpen}
            handleUpdateOpen={handleUpdateOpen}
            handleUpdateClose={handleUpdateClose}

            onUpdateLanguage={onUpdateLanguage}
            onDeleteLanguage={onDeleteLanguage}

        />
    )
}

export default LanguageContainer;