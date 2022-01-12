import React, {useState, useEffect, useCallback} from 'react';
import TradeDetailPresenter from "./TradeDetailPresenter";
import {useHistory} from "react-router-dom";

const TradeDetailContainer = () => {
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [tradeVisit, setTradeVisit] = useState({
        date: new Date(),
        volume: '',
        unit: 'USD',
        visit: '',
        coin: 'bitcoin',
        currency: 'KRW',
    });

    // 이전
    const goBack = useCallback(() => {
        history.push('/trade');
    }, []);


    // Header Tab 매뉴
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // 거래량 방문 상태
    const onTradeVisitChange = useCallback((value, type) => {
        if (type === "date" || type === "coin") {
            setTradeVisit({
                ...tradeVisit,
                [type]: value
            });
        } else {
            setTradeVisit({
                ...tradeVisit,
                [type]: value.replace(/[^0-9]/g, '')
            });
        }
    }, []);

    // 거래량, 방문 등록
    const handleAddTradeVisit = useCallback(async () => {
        try {

        } catch (e) {

        }
    }, []);

    // 거래량 삭제
    const handleDeleteTradeVisit = useCallback(async id => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {

            } catch (e) {

            }
        }
    }, []);

    // 코인 삭제
    const handleDeleteCoin = useCallback(async id => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {

            } catch (e) {

            }
        }
    }, []);

    // 지원화폐 삭제
    const handleDeleteCurrency = useCallback(async id => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {

            } catch (e) {

            }
        }
    }, []);


    useEffect(() => {
        console.info('tradeVisit', tradeVisit);
    }, [tradeVisit]);

    return (
        <TradeDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            goBack={goBack}

            tradeVisit={tradeVisit}
            onTradeVisitChange={onTradeVisitChange}
            handleDeleteTradeVisit={handleDeleteTradeVisit}
            handleDeleteCoin={handleDeleteCoin}
            handleDeleteCurrency={handleDeleteCurrency}
        />
    )
}

export default TradeDetailContainer;