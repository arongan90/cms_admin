import React, {useCallback, useEffect, useState} from 'react';
import NewsLetterPresentation from "./NewsLetterPresentation";
import {convertToRaw, EditorState} from "draft-js";
import {inputOnlyNumber} from "../../../utils/common";
import draftToHtml from "draftjs-to-html";

const NewsLetterContainer = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [mailTimer, setMailTimer] = useState({
        title: "",
        date: new Date(),
        am_pm: "AM",
        hour: "",
        minute: ""
    });

    // 헤더 탑 Menu 바
    const handleTabMenu = useCallback(value => setTabMenu(value), []);
    // 에디터 상태 변경
    const onEditorStateChange = useCallback(editorState => setEditorState(editorState), []);
    // Input Handler
    const onInputChange = useCallback((e, type) => {
        switch(type) {
            case "date":
            case "am_pm":
                setMailTimer({
                    ...mailTimer,
                    [type]: e
                });
                break;
            case "title":
                setMailTimer({
                    ...mailTimer,
                    [type]: e.target.value
                });
                break;
            case "hour":
            case "minute":
                setMailTimer({
                    ...mailTimer,
                    [type]: inputOnlyNumber(e.target.value)
                });
        }
    }, [mailTimer]);

    // 에디터 인코딩
    const editorToHtml = draftToHtml(convertToRaw(editorState && editorState.getCurrentContent()));

    // 메일 추가
    const handleAddMail = useCallback(() => {
        let innerText = editorToHtml.slice(3, -5);
        const { title, date, am_pm, hour, minute } = mailTimer;
        if (title === "" || hour === "" || minute === "" || innerText === "") {
            alert("정보를 모두 입력해주세요.");
            return;
        }
        try {

        } catch(e) {

        }
    }, []);
    // 취소
    const handleCancel = useCallback(() => {
        setMailTimer({
            title: "",
            date: new Date(),
            am_pm: "AM",
            hour: "",
            minute: ""
        });
        setTabMenu(0);
    }, []);

    return (
        <NewsLetterPresentation
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            mailTimer={mailTimer}
            onInputChange={onInputChange}
            handleAddMail={handleAddMail}
            handleCancel={handleCancel}
        />
    )
}

export default NewsLetterContainer;