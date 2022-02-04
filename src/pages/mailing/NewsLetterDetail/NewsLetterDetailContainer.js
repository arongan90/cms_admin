import React, {useCallback, useEffect, useState} from 'react';
import NewsLetterDetailPresenter from "./NewsLetterDetailPresenter";
import SendRequest from "../../../utils/SendRequest";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as constants from "../../../utils/constants";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const NewsLetterDetailContainer = ({ match }) => {
    const history = useHistory();
    const { newsId } = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [newsData, setNewsData] = useState({});
    const [update, setUpdate] = useState(false);
    const [mailStatusOpen, setMailStatusOpen] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // Header Tab 매뉴
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // 에디터 상태 onChange
    const onEditorStateChange = useCallback(editorState => setEditorState(editorState), []);
    // 에디터 인코딩
    const editorToHtml = draftToHtml(convertToRaw(editorState && editorState.getCurrentContent()));

    // 수정내용 저장
    const onSaveNews = useCallback(async() => {
        try {
            // const { data } = await SendRequest().post(``);
            setUpdate(false);
        } catch (e) {

        }
    }, []);

    // 메일 즉시 발송
    const handleImmediatelySend = useCallback(async () => {
        setMailStatusOpen(true);
        try {

        } catch(e) {
            throw new Error(e);
        }
    }, []);

    // 메일 발송 현황 모달 닫기
    const handleCloseModal = useCallback(() => setMailStatusOpen(false), []);

    // 삭제하기
    const onDeleteNews = useCallback(async () => {
        if (window.confirm("삭제 하시겠습니까?")) {
            try {

            } catch(e) {

            }
        }
    }, []);

    // 수정할 데이터 받아오기
    const fetchNewsDetail = useCallback(async () => {
        // try {
        //     const { data } = await SendRequest().get(`${serverProtocol}${serverURL}/recentNews/${newsId}`);
        //     setNewsData(data);
        // } catch(e) {
        //     throw new Error(e);
        // }
    }, []);

    // 이전
    const handleGoBack = useCallback(() => {
        history.push('/newsLetter');
    }, []);

    // 취소
    const handleCancel = useCallback(() => {
        setUpdate(!update);
    }, [update]);

    // 저장
    const handleSave = useCallback(async () => {
        try {

        } catch(e) {
            throw new Error(e);
        }
    }, []);

    useEffect(() => {
        // fetchNewsDetail();
    }, []);

    return (
        <NewsLetterDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            // newsData={newsData}
            update={update}
            mailStatusOpen={mailStatusOpen}
            handleImmediatelySend={handleImmediatelySend}
            handleCloseModal={handleCloseModal}
            // 에디터 상태
            setUpdate={setUpdate}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorToHtml={editorToHtml}
            onSaveNews={onSaveNews}
            onDeleteNews={onDeleteNews}


            handleGoBack={handleGoBack}
            handleCancel={handleCancel}
            handleSave={handleSave}
        />
    )
}

export default NewsLetterDetailContainer;