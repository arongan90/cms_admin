import React, {useState, useEffect, useCallback} from 'react';
import RecentNewsDetailPresenter from "./RecentNewsDetailPresenter";
import SendRequest from "../../../utils/SendRequest";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const RecentNewsDetailContainer = ({ match }) => {
    const { newsId } = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [newsData, setNewsData] = useState({});
    const [update, setUpdate] = useState(false);
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
        try {
            const { data } = await SendRequest().get(`${serverProtocol}${serverURL}/recentNews/${newsId}`);
            setNewsData(data);
        } catch(e) {
            throw new Error(e);
        }
    }, []);

    useEffect(() => {
        fetchNewsDetail();
    }, []);

    return (
        <RecentNewsDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            newsData={newsData}
            update={update}

            // 에디터 상태
            setUpdate={setUpdate}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorToHtml={editorToHtml}
            onSaveNews={onSaveNews}
            onDeleteNews={onDeleteNews}
        />
    )
}

export default RecentNewsDetailContainer;