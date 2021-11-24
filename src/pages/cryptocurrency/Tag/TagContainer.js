import React from 'react';
import TagPresentation from "./TagPresentation";

const TagContainer = () => {
    const tagTableColumns = [
        { id: 'ranking', label: '순위', width: 10, align: 'center'  },
        { id: 'tagName', label: '태그명', width: 150, align: 'left'  },
        { id: 'coinCount', label: '코인 수', width: 80, align: 'right' },
        { id: 'chart', label: '점유율', width: 100, align: 'center' },
        { id: 'transactionPrice_24', label: 'Top 코인', width: 100, align: 'center' },
        { id: 'prediction_24', label: '시가총액', width: 100, align: 'center' },
        { id: 'prediction_24', label: '24시간 거래량', width: 100, align: 'center' },
    ];

    return (
        <TagPresentation
            tagTableColumns={tagTableColumns}
        />
    )
}

export default TagContainer;