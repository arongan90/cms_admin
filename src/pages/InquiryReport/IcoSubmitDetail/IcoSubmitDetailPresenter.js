import React from 'react';
import styled from "styled-components";
import ContentBox from "../../../components/share/ContentBox";
import HeaderContent from "../../../components/share/HeaderContent";
import colors from "../../../styles/colors";
import Button from "../../../components/share/Button";
import cardenceIcon from "../../../images/icoIcon/cardence.png";

const Wrapper = styled.div`
  padding: 20px 20px;
  max-width: 1550px;
`;
const ButtonGroup = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'space-between'};
  align-items: center;
`;
const TableBox = styled.div`
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  
  table {
    width: 100%;
  }
  
  td {
    padding: 12px 14px;
    border: 1px solid ${colors.borderColor};
  }
  
  td:nth-child(1),
  td:nth-child(3) {
    width: 170px;
    font-weight: 600;
    background-color: ${colors.theadBgColor};
  }
`;
const Row = styled.div`
   display: flex;
  align-items: center;
`;
const ImageBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const AppImage = styled.img`
  width: 100%;
  height: 100%;
`;
const VideoBox = styled.div`
  width: 300px;
`;
const AppVideo = styled.iframe`

`;

const IcoSubmitDetailPresenter = ({
                                      tabMenu,
                                      handleTabMenu,
                                      onRegisterIco,

                                      코인명 = "Fanadise",
                                      화폐단위 = "FAN",
                                      토큰가격 = 0.16,
                                      단위 = "USD",
                                      구분 = "DeFi",
                                      플랫폼 = "ERC20",
                                      카테고리 = "NFT",
                                      시작일 = "2021.08.01",
                                      종료일 = "2021.08.27",
                                      화이트리스트 = true,
                                      사전판매 = false,
                                      하드캡 = 57600000,
                                      소프트캡 = 57315300,
                                      짧은설명 = "Fanadise is an exclusive content platform created for internet influencers to monetize their social presence and",
                                      특징 = "내용",
                                      공식비디오 = "https://www.youtube.com/embed/tiRT8W6V7hg",
                                      고객알기제도 = "(KYC: Know Your Customer)",
                                      참여제한 = "한국 및 또는 캐나다 거주자에게 판매할 예정입니다.",
                                      계약플랫폼 = "Tron",
                                      거래소상장 = "내용",
                                      웹사이트 = "https://www.",
                                      백서링크 = "https://www.",
                                      트위터링크 = "https://www.",
                                      슬랙링크 = "https://www.",
                                      텔레그램링크 = "https://www.",
                                      페이스북링크 = "https://www.",
                                      레딧링크 = "https://www.",
                                      비트코인링크 = "https://www.",
                                      중간링크 = "https://www.",
                                      Github링크 = "https://www.",
                                      디스코드앱링크 = "https://www.",
                                      모바일앱링크 = "https://www.",
                                      모금지갑주소 = "https://www.",

                                  }) => {
    return (
        <ContentBox>
            <HeaderContent
                tabMenu={tabMenu}
                handleTabMenu={handleTabMenu}
                title="문의/신고"
                tabList={["ICO 제출"]}
            />
            <Wrapper>
                <ButtonGroup>
                    <Button
                        title="이전"
                        width={120}
                        height={38}
                        fontColor={colors.darkBlueColor}
                        border={`1px solid ${colors.darkBlueColor}`}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        fontWeight={600}
                        // onClick={onCancel}
                    />
                    <Button
                        title="ICO 등록"
                        margin="0 0 0 15px"
                        width={120}
                        height={38}
                        fontColor={colors.whiteColor}
                        bgColor={colors.darkBlueColor}
                        fontSize={16}
                        fontWeight={500}
                        onClick={onRegisterIco}
                    />
                </ButtonGroup>
                <TableBox>
                    <table>
                        <tbody>
                        <tr>
                            <td>코인명</td>
                            <td>
                                <Row>
                                    <ImageBox>
                                        <AppImage src={cardenceIcon} />
                                    </ImageBox>
                                    {코인명}
                                </Row>
                            </td>
                            <td>화폐단위</td>
                            <td>
                                {화폐단위}
                            </td>
                        </tr>
                        <tr>
                            <td>토큰가격</td>
                            <td>
                                {토큰가격} {단위}
                            </td>
                            <td>구분</td>
                            <td>
                                {구분}
                            </td>
                        </tr>
                        <tr>
                            <td>플랫폼</td>
                            <td>
                                {플랫폼}
                            </td>
                            <td>카테고리</td>
                            <td>
                                {카테고리}
                            </td>
                        </tr>
                        <tr>
                            <td>시작일</td>
                            <td>
                                {시작일}
                            </td>
                            <td>종료일</td>
                            <td>
                                {종료일}
                            </td>
                        </tr>
                        <tr>
                            <td>화이트 리스트</td>
                            <td>
                                {화이트리스트}
                            </td>
                            <td>사전 판매</td>
                            <td>
                                {사전판매}
                            </td>
                        </tr>
                        <tr>
                            <td>하드캡(₩)</td>
                            <td>
                                {하드캡}
                            </td>
                            <td>소프트캡(₩)</td>
                            <td>
                                {소프트캡}
                            </td>
                        </tr>
                        <tr>
                            <td>짧은 설명</td>
                            <td colSpan={3}>
                                {짧은설명}
                            </td>
                        </tr>
                        <tr>
                            <td>특징</td>
                            <td colSpan={3}>
                                {특징}
                            </td>
                        </tr>
                        <tr>
                            <td>공식 비디오</td>
                            <td colSpan={3}>
                                <VideoBox>
                                    <AppVideo src={공식비디오} />
                                </VideoBox>
                            </td>
                        </tr>
                        <tr>
                            <td>고객알기제도</td>
                            <td colSpan={3}>
                                {고객알기제도}
                            </td>
                        </tr>
                        <tr>
                            <td>참여제한</td>
                            <td colSpan={3}>
                                {참여제한}
                            </td>
                        </tr>
                        <tr>
                            <td>계약플랫폼</td>
                            <td>
                                {계약플랫폼}
                            </td>
                            <td>거래소 상장</td>
                            <td>
                                {거래소상장}
                            </td>
                        </tr>
                        <tr>
                            <td>웹사이트</td>
                            <td>
                                {웹사이트}
                            </td>
                            <td>백서 링크</td>
                            <td>
                                {백서링크}
                            </td>
                        </tr>
                        <tr>
                            <td>트위터 링크</td>
                            <td>
                                {트위터링크}
                            </td>
                            <td>슬랙 링크</td>
                            <td>
                                {슬랙링크}
                            </td>
                        </tr>
                        <tr>
                            <td>탤레그램 링크</td>
                            <td>
                                {텔레그램링크}
                            </td>
                            <td>페이스북 링크</td>
                            <td>
                                {페이스북링크}
                            </td>
                        </tr>
                        <tr>
                            <td>레딧 링크</td>
                            <td>
                                {레딧링크}
                            </td>
                            <td>비트코인 링크</td>
                            <td>
                                {비트코인링크}
                            </td>
                        </tr>
                        <tr>
                            <td>중간 링크</td>
                            <td>
                                {중간링크}
                            </td>
                            <td>Github 링크</td>
                            <td>
                                {Github링크}
                            </td>
                        </tr>
                        <tr>
                            <td>디스코드 앱 링크</td>
                            <td>
                                {디스코드앱링크}
                            </td>
                            <td>모바일 앱 링크</td>
                            <td>
                                {모바일앱링크}
                            </td>
                        </tr>
                        <tr>
                            <td>모금 지갑 주소</td>
                            <td colSpan={3}>
                                {모금지갑주소}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </TableBox>
                <ButtonGroup justifyContent="flex-end">
                    <Button
                        title="삭제"
                        width={120}
                        height={38}
                        fontColor={colors.activeRed}
                        border={`1px solid ${colors.activeRed}`}
                        bgColor={colors.whiteColor}
                        fontSize={16}
                        fontWeight={600}
                        // onClick={onCancel}
                    />
                </ButtonGroup>
            </Wrapper>
        </ContentBox>
    )
}

export default IcoSubmitDetailPresenter;