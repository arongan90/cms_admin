import React, {useState, useEffect, useCallback} from 'react';
import TradePresentation from "./TradePresentation";

const TradeContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [addTradeInput, setAddTradeInput] = useState({
        coinImage: '',
        name: '',
        type: 'spot',
        trustScore: '',
        market: '',
        siteURL: '',
        feeURL: '',
        chatURL: '',
        twitterURL: '',
    });

    // Input handler
    const onInputChange = useCallback(e => {
        const { value, name } = e.target;
        setAddTradeInput({
            ...addTradeInput,
            [name]: value
        });
    }, []);

    // Input 상태 초기화
    const inputReset = () => {
        setAddTradeInput({
            coinImage: '',
            name: '',
            type: 'spot',
            trustScore: '',
            market: '',
            siteURL: '',
            feeURL: '',
            chatURL: '',
            twitterURL: '',
        });
    }

    // 취소
    const onCancel = () => {
        setTabMenu(0);
        inputReset();
    }

    // 거래소 추가
    const onAddTrade = async () => {
        const { coinImage, name, type, trustScore, market, siteURL, feeURL, chatURL, twitterURL } = addTradeInput;
        console.info(addTradeInput);

        if (name === "" || trustScore === "" || market === "") {
            alert("정보를 모두 입력해주세요.");
            return;
        }

        try {

        } catch (e) {

        }
    }

    // 헤더 탑 Menu 바
    const handleTabMenu = value => setTabMenu(value);


    useEffect(() => {
        console.info(tabMenu);
    }, [tabMenu]);

    return (
        <TradePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            addTradeInput={addTradeInput}
            onInputChange={onInputChange}
            onCancel={onCancel}
            onAddTrade={onAddTrade}
        />
    )
}

export default TradeContainer;