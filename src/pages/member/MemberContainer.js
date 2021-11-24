import React, {useState, useEffect, useReducer} from 'react';
import MemberPresentational from "./MemberPresentational";
import axios from "axios";
import * as constants from "../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const memberTableColumns = [
    {id: 'num', label: '번호', width: 50, align: 'center',},
    {id: 'name', label: '이름', width: 80, align: 'center',},
    {id: 'email', label: '이메일 주소', width: 280, align: 'center',}, // format: (value) => value.toLocaleString('ko-KR')
    {id: 'coin', label: '관심 코인', width: 50, align: 'center',}, // format: (value) => value.toLocaleString('ko-KR'),
    {
        id: 'portfolio',
        label: '포트폴리오 자산(₩)',
        width: 150,
        align: 'right',
        format: (value) => value.toLocaleString('ko-KR')
    },
    {
        id: 'register_date',
        label: '가입일',
        width: 100,
        align: 'right',
        format: (value) => value.toLocaleDateString('ko-KR', {
            year: '2-digit',
            month: 'numeric',
            day: 'numeric',
        }).slice(0, -1)
    },
    {id: 'register_type', label: '가입 방식', width: 100, align: 'right',},
    {id: 'lastLogin', label: '마지막 접속', width: 80, align: 'right',},
];

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                memberData: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                memberData: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                memberData: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const MemberContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [memberList, setMemberList] = useState();
    const [fetchDataState, dispatch] = useReducer(reducer, {
        loading: false,
        memberData: [],
        error: null
    });
    const [searchInput, setSearchInput] = useState({
        startDate: new Date(),
        finishDate: new Date(),
        email: '',
        name: '',
        joinType: '',
        portfolioAssetsStart: '',
        portfolioAssetsFinish: '',
        age14: 'up',
    });
    const {memberData, loading, error} = fetchDataState;

    const handleTabMenu = value => setTabMenu(value);
    const handleChangePage = page => {
        let indexOfLast = page * rowsPerPage;
        let indexOfFirst = indexOfLast - rowsPerPage;

        setCurrentPage(page);
        setMemberList(memberData.slice(indexOfFirst, indexOfLast));
    }

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(+e.target.value);
        setMemberList(memberList.slice(0, e.target.value));
    };
    const onSearchChange = e => {
        const { name, value} = e.target;

        setSearchInput({
            ...searchInput,
            [name]: value,
        });
    }
    const onDateChange = (value, type) => {
        setSearchInput({
            ...searchInput,
            [type]: value,
        });
    }

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await axios.get(`${serverProtocol}${serverURL}/memberData`);
            dispatch({type: 'SUCCESS', data: response.data});
            setMemberList(response.data.slice(0, rowsPerPage));
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    }

    useEffect(() => {
        setMemberList(memberData.slice(0, rowsPerPage));
    }, [rowsPerPage]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.info('searchInput', searchInput)
    }, [searchInput]);

    return (
        <MemberPresentational
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            memberTableColumns={memberTableColumns}
            memberData={memberData}
            memberList={memberList}
            loading={loading}
            error={error}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            searchInput={searchInput}
            onSearchChange={onSearchChange}
            onDateChange={onDateChange}
        />
    )
}

export default MemberContainer;