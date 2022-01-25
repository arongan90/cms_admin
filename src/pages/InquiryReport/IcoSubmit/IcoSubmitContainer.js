import React, {useCallback, useState} from 'react';
import IcoSubmitPresentation from "./IcoSubmitPresentation";

const IcoSubmitContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // 페이지
    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        // setMemberList(memberData.slice(indexOfFirst, indexOfLast));
    }

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    return (
        <IcoSubmitPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
        />
    )
}

export default IcoSubmitContainer;