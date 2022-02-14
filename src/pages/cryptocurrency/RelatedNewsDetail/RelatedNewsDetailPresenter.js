import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import NewsInfoTable from "../../../components/feature/Cryptocurrency/NewsInfoTable";
import Button from "../../../components/share/Button";
import colors from "../../../styles/colors";

const Wrapper = styled.div`
  padding: 0 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 20px 0;
`;

const RelatedNewsDetailPresenter = ({
                                        tabMenu,
                                        handleTabMenu,
                                        update,
                                        handleUpdate,
                                        goBack,
                                        onCancel,
                                        onSave,
                                        addNewsInfo,
                                        onNewsInfoChange,
                                        thumbnailUpload,
                                    }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="관련 뉴스"
                tabList={["관련 뉴스"]}
            />
            <Wrapper>
                <NewsInfoTable
                    update={update}
                    addNewsInfo={addNewsInfo}
                    onNewsInfoChange={onNewsInfoChange}
                    thumbnailUpload={thumbnailUpload}
                />
                <ButtonGroup>
                    <Button
                        title={update ? "취소" : "이전"}
                        width={120}
                        height={38}
                        border={`1px solid ${colors.deepNavyColor}`}
                        fontColor={colors.deepNavyColor}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        onClick={update ? onCancel : goBack}
                    />
                    <Button
                        title={update ? "저장" : "수정"}
                        width={120}
                        height={38}
                        margin="0 0 0 15px;"
                        fontColor={colors.whiteColor}
                        bgColor={colors.deepNavyColor}
                        fontSize={16}
                        onClick={update ? onSave : handleUpdate}
                    />
                </ButtonGroup>
            </Wrapper>
        </ContentBox>
    )
}

export default RelatedNewsDetailPresenter;