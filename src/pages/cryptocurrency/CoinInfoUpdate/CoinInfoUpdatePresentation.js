import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import CryptocurrencyColumnTable from "../../../components/feature/Cryptocurrency/CryptocurrencyColumnTable";

const Wrapper = styled.div`
  padding: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 200px;
`;
const TopButtonGroup = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px;
`;

const CoinInfoUpdatePresentation = ({
                                        tabMenu,
                                        handleTabMenu,
                                        updateCoinState,
                                        chipState,
                                        handleAddChips,
                                        handleDeleteChips,
                                        onCoinChange,
                                        onDelete,
                                        goBack,
                                        onSave,
                                    }) => {
    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'scroll',
            bgcolor: '#eaeff1'
        }}>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="코인 정보"
                tabList={["코인 수정"]}
            />
            <Wrapper>
                <CryptocurrencyColumnTable
                    coinState={updateCoinState}
                    onCoinChange={onCoinChange}
                    chipState={chipState}
                    handleAddChips={handleAddChips}
                    handleDeleteChips={handleDeleteChips}
                />
                <ButtonGroup>
                    <Button
                        width={120}
                        height={48}
                        border={`1px solid ${colors.activeRed}`}
                        bgColor={colors.whiteColor}
                        fontColor={colors.activeRed}
                        fontSize={20}
                        title="삭제"
                        onClick={onDelete}
                    />
                    <div>
                        <Button
                            width={120}
                            height={48}
                            border={`1px solid ${colors.activeBlue}`}
                            bgColor={colors.whiteColor}
                            fontColor={colors.activeBlue}
                            fontSize={20}
                            title="취소"
                            onClick={goBack}
                        />
                        <Button
                            width={120}
                            height={50}
                            bgColor={colors.activeBlue}
                            fontColor={colors.whiteColor}
                            fontSize={20}
                            margin="0 0 0 20px"
                            title="저장"
                            onClick={onSave}
                        />
                    </div>
                </ButtonGroup>
            </Wrapper>
        </Box>
    )
}

export default CoinInfoUpdatePresentation;