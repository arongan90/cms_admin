import React, {useCallback, useState, useEffect} from 'react';
import ErrorReportPresentation from "./ErrorReportPresentation";

const ErrorReportContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState();

    // 오류신고 처리 체크
    const handleDoneError = useCallback(() => {
        setChecked(!checked);
        let today = new Date();

        setDate(today.toLocaleString());
    }, [checked]);

    // 페이지
    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        // setMemberList(memberData.slice(indexOfFirst, indexOfLast));
    }

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    useEffect(() => {
        // console.info('checked', checked)
    }, [checked]);


    return (
        <ErrorReportPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}

            handleDoneError={handleDoneError}
            date={date}
            checked={checked}
        />
    )
}

export default ErrorReportContainer;