import React, {useState, useCallback} from 'react';
import PriceNoticePresentation from "./PriceNoticePresentation";

const PriceNoticeContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [plusMinus, setPlusMinus] = useState("+");

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);
    const handlePlusMinus = useCallback(value => setPlusMinus(value), []);

    const onDeletePrice = useCallback(async () => {
        try {
            if (window.confirm("정말 삭제하시겠습니까 ?")) {

            }
        } catch(e) {

        }
    }, []);

    return (
        <PriceNoticePresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            plusMinus={plusMinus}
            handlePlusMinus={handlePlusMinus}

            onDeletePrice={onDeletePrice}
        />
    )
}

export default PriceNoticeContainer;