import React from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import uploadImage from "../../images/UploadImage.svg";

const ImageInputLabel = styled.label`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 5px;
  position: relative;
  border: 1px solid ${colors.borderColor};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding-top: 2px;
  color: ${colors.grayColor};
  cursor: pointer;
`;
const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
`;
const PreviewBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: -1px;
`;
const AppImage = styled.img`
    
`;


const IconImageUpload = ({ onChange, state, }) => {
    return (
        <ImageInputLabel>
            <FileInput type="file" accept="image/*" onChange={onChange} />
            {state.coinImage && (
                <PreviewBox>
                    <AppImage width="100%" height="100%" src={state.coinImage}/>
                </PreviewBox>
            )}
            <AppImage width="60%" height="60%" src={uploadImage}/>
            ICON
        </ImageInputLabel>
    )
}

export default IconImageUpload;