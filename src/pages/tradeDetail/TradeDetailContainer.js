import React, {useState, useEffect, useCallback} from 'react';
import TradeDetailPresenter from "./TradeDetailPresenter";

const TradeDetailContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [tradeVisit, setTradeVisit] = useState({
        date: new Date(),
        volume: '',
        unit: 'USD',
        visit: ''
    });

    // Header Tab 매뉴
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // 거래량 방문 상태
    const onTradeVisitChange = useCallback((value, type) => {
        setTradeVisit({
            ...tradeVisit,
            [type]: value !== "date" ? value.replace(/[^0-9]/g,'') : value
        })
    }, []);

    // 거래량, 방문 등록
    const handleAddTradeVisit = useCallback(async () => {
        try {

        } catch (e) {

        }
    } ,[]);

    useEffect(() => {
        console.info('tradeVisit', tradeVisit);
    }, [tradeVisit]);

    return (
        <TradeDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            tradeVisit={tradeVisit}
            onTradeVisitChange={onTradeVisitChange}
        />
    )
}

export default TradeDetailContainer;