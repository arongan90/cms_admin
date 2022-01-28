import React, {useCallback, useState} from 'react';
import CurrencyPresentation from "./CurrencyPresentation";

const CurrencyContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [currency, setCurrency] = useState("");
    const [updateOpen, setUpdateOpen] = useState(false);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    const onCurrencyChange = useCallback(({ target: {value} }) => setCurrency(value), []);

    const handleUpdateOpen = useCallback(() => setUpdateOpen(true), []);
    const handleUpdateClose = useCallback(() => setUpdateOpen(false), []);

    const onDeleteCurrency = useCallback(() => {
            if (window.confirm("정말 삭제하시겠습니까 ?")) {

            }
        }, []);


    return (
        <CurrencyPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            currency={currency}
            onCurrencyChange={onCurrencyChange}

            updateOpen={updateOpen}
            handleUpdateOpen={handleUpdateOpen}
            handleUpdateClose={handleUpdateClose}

            onDeleteCurrency={onDeleteCurrency}
        />
    )
}

export default CurrencyContainer;