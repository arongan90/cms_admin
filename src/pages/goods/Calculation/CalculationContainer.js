import React, {useCallback, useState} from 'react';
import CalculationPresentation from "./CalculationPresentation";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";

const CalculationContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [calcUpdate, setCalcUpdate] = useState(false);

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);

    // 산정방법 수정
    const onCalcUpdate = useCallback(async () => {
        // history.push(`/apiUpdate`);
        setCalcUpdate(true);
    }, []);

    // 취소
    const onCancel = useCallback(() => {
        setCalcUpdate(false);
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
        <CalculationPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            onCalcUpdate={onCalcUpdate}
            calcUpdate={calcUpdate}
            onCancel={onCancel}
            onSave={onSave}

            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorToHtml={editorToHtml}
        />
    )
}

export default CalculationContainer;