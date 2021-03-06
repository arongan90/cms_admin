import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import colors from "../../styles/colors";

const MyBlock = styled.div`
  .editor {
    height: ${({height}) => height ? height : 500}px !important;
    padding: 5px 10px !important;
  }

  .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {
    height: auto;
  }

  .public-DraftStyleDefault-block {
    margin: 0;
  }
`;

const WysiwygEditor = ({
                           height,
                           editorState,
                           onEditorStateChange,
                       }) => {
    return (
        <MyBlock height={height}>
            <Editor
                // 에디터와 툴바 모두에 적용되는 클래스
                wrapperClassName="wrapper-class"
                // 에디터 주변에 적용된 클래스
                editorClassName="editor"
                // 툴바 주위에 적용된 클래스
                toolbarClassName="toolbar-class"
                // 툴바 설정
                toolbar={{
                    // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
                    list: {inDropdown: true},
                    textAlign: {inDropdown: true},
                    link: {inDropdown: true},
                    history: {inDropdown: false},
                }}
                placeholder="내용을 작성해주세요."
                // 한국어 설정
                localization={{
                    locale: 'ko',
                }}
                // 초기값 설정
                editorState={editorState}
                // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
                onEditorStateChange={onEditorStateChange}
            />
        </MyBlock>
    )
}

export default WysiwygEditor;