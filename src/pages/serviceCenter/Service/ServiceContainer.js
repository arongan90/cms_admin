import React, {useCallback, useState} from 'react';
import ServicePresentation from "./ServicePresentation";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import * as constants from "../../../utils/constants";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const ServiceContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [update, setUpdate] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // Header Tab 매뉴
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
        <ServicePresentation
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

export default ServiceContainer;