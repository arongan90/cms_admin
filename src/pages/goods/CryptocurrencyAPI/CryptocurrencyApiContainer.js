import React, { useState, useCallback } from 'react';
import CryptocurrencyApiPresentation from "./CryptocurrencyApiPresentation";
import {useHistory} from "react-router-dom";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";

const CryptocurrencyApiContainer = () => {
    const history = useHistory();
    const [tabMenu, setTabMenu] = useState(0);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [apiUpdate, setApiUpdate] = useState(false);

    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // 암호화폐 수정
    const onApiUpdate = useCallback(async () => {
        // history.push(`/apiUpdate`);
        setApiUpdate(true);
    }, []);

    // 취소
    const onCancel = useCallback(() => {
        setApiUpdate(false);
    }, []);

    // 저장
    const onSave = useCallback(async () => {
        try {

        } catch(e) {
            throw new Error(e);
        }
    }, []);

    // 에디터 상태 변경
    const onEditorStateChange = useCallback(editorState => setEditorState(editorState), []);
    // 에디터 인코딩
    const editorToHtml = draftToHtml(convertToRaw(editorState && editorState.getCurrentContent()));

    return (
        <CryptocurrencyApiPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            onApiUpdate={onApiUpdate}
            apiUpdate={apiUpdate}
            onCancel={onCancel}
            onSave={onSave}

            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorToHtml={editorToHtml}
        />
    )
}

export default CryptocurrencyApiContainer;