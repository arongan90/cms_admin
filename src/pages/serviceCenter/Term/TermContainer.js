import React, {useCallback, useState} from 'react';
import TermPresentation from "./TermPresentation";
import * as constants from "../../../utils/constants";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const TermContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [update, setUpdate] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // 수정
    const onUpdate = useCallback(() => setUpdate(true), []);

    // 취소
    const onCancel = useCallback(() => setUpdate(false), []);

    // 에디터 상태 onChange
    const onEditorStateChange = useCallback(editorState => setEditorState(editorState), []);
    // 에디터 인코딩
    const editorToHtml = draftToHtml(convertToRaw(editorState && editorState.getCurrentContent()));

    return (
        <TermPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}

            update={update}
            onUpdate={onUpdate}
            onCancel={onCancel}

            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorToHtml={editorToHtml}
        />
    )
}

export default TermContainer;