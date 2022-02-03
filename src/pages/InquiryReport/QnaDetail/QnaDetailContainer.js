import React, {useCallback, useState, useEffect} from 'react';
import QnaDetailPresenter from "./QnaDetailPresenter";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import {useHistory} from "react-router-dom";

const QnaDetailContainer = ({ match }) => {
    const { qnaId } = match.params;
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // 취소
    const onCancel = useCallback(() => {
        history.push('/qna');
        setEditorState(EditorState.createEmpty());
    }, [history]);

    // 답변 완료
    const onComplete = useCallback(async () => {
        console.info('editorState', editorState);
        try {

        } catch(e) {

        }
    }, [editorState]);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);
    // 에디터 상태 변경
    const onEditorStateChange = useCallback(editorState => setEditorState(editorState), []);
    // 에디터 인코딩
    const editorToHtml = draftToHtml(convertToRaw(editorState && editorState.getCurrentContent()));

    useEffect(() => {
        console.info(':::', editorState && editorState.getCurrentContent());
    }, [editorState]);

    return (
        <QnaDetailPresenter
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorToHtml={editorToHtml}

            onCancel={onCancel}
            onComplete={onComplete}
        />
    )
}

export default QnaDetailContainer;