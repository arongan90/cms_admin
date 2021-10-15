import React, {useEffect} from 'react';
import styled from 'styled-components';
import colors from '../../styles/Colors';
import Input from "../share/Input";
import Select from "../share/Select";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from "@mui/material/TextField";
import Button from "../share/Button";
import DaumPostcode from "react-daum-postcode";
import { Modal } from '@material-ui/core';

const Wrapper = styled.div`
  background: ${colors.backgroundColor};
`;
const InputBox = styled.div`
  width: 100%;
  height: 500px;
  max-width: 1200px;
  margin: 30px auto;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  background: ${colors.whiteColor};
  border-radius: 8px;
`;
const InputLine = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: ${({align}) => align ? align : 'center'};
  border-bottom: 1px solid ${colors.borderColor};

  &:last-child {
    border-bottom: none;
  }

  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }

  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
  }
`;
const Title = styled.div`
  min-width: 130px;
  font-size: 16px;
  color: ${colors.blackColor};
`;
const AddressBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UnionServiceBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
`;
const ButtonGroup = styled.div`
  margin: 80px auto;
  text-align: center;
`;
const PostModal = styled(Modal)`
  width: 500px;
  margin: 10% auto;
`;

const AddMember = ({
                       usedPeriod,
                       handleDateChange,
                       handleGoodsType,
                       serviceType,
                       setServiceType,
                       openAddress,
                       setOpenAddress,
                       handleAddressComplete,
                       memberInfo,
                       infoInputChange,
                   }) => {

    console.info(memberInfo);

    const { bizName, bizNum, bizAddress, bizDetailAddress, bizTel, ceoName, phone } = memberInfo;

    useEffect(() => {
        return setServiceType('');
    }, []);

    return (
        <Wrapper>
            <InputBox>
                <InputLine>
                    <Title>회사명</Title>
                    <Input
                        width={30}
                        value={bizName}
                        infoInputChange={infoInputChange}
                        name="bizName"
                        placeholder="회사명을 입력해주세요."
                    />
                </InputLine>
                <InputLine>
                    <Title>사업자 번호</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={bizNum}
                        name="bizNum"
                        placeholder="사업자 번호를 입력해주세요."
                    />
                </InputLine>
                <InputLine align="flex-start">
                    <Title>사업장 주소</Title>
                    <AddressBox>
                        <Input
                            readOnly
                            width={42}
                            setOpenAddress={setOpenAddress}
                            value={bizAddress}
                            placeholder="주소를 검색해주세요.."
                        />
                        <Input
                            width={42}
                            infoInputChange={infoInputChange}
                            value={bizDetailAddress}
                            name="bizDetailAddress"
                            placeholder="상세주소를 입력해주세요."
                        />
                        <PostModal
                            open={openAddress}
                            onClose={() => setOpenAddress(false)}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <>
                                <DaumPostcode onComplete={handleAddressComplete}/>
                            </>
                        </PostModal>
                    </AddressBox>
                </InputLine>
                <InputLine>
                    <Title>전화번호</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={bizTel}
                        name="bizTel"
                        placeholder="회사 전화번호를 입력해주세요."
                    />
                </InputLine>
                <InputLine>
                    <Title>대표자 명</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={ceoName}
                        name="ceoName"
                        placeholder="대표자 명을 입력해주세요."
                    />
                </InputLine>
                <InputLine>
                    <Title>휴대폰 번호</Title>
                    <Input
                        width={30}
                        value={phone}
                        name="phone"
                        placeholder="대표자의 휴대폰 번호 입력해주세요."
                    />
                </InputLine>

                <InputLine>
                    <Title>이용 기간</Title>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="시작 날짜"
                            value={usedPeriod.start}
                            onChange={newValue => handleDateChange(newValue, 'START_USING')}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    &nbsp;~&nbsp;
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="죵료 날짜"
                            value={usedPeriod.finish}
                            onChange={newValue => handleDateChange(newValue, 'FINISH_USING')}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </InputLine>
                <InputLine>
                    <Title>상품 타입</Title>
                    <Select
                        width={8}
                        options={['밋업', '게이트', '유니온']}
                        onChange={handleGoodsType}
                    />
                    {serviceType === '유니온' &&
                    <UnionServiceBox>
                        <Title>이용 서비스</Title>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="화상회의"/>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="동영상 임베드"/>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="게시판"/>
                        <FormControlLabel control={<Checkbox/>} label="라이브방송"/>
                        <FormControlLabel control={<Checkbox/>} label="링크바인더"/>
                        <FormControlLabel control={<Checkbox/>} label="쇼핑몰"/>
                    </UnionServiceBox>
                    }
                </InputLine>
            </InputBox>

            <ButtonGroup>
                <Button
                    width={120}
                    height={50}
                    fontSize={18}
                    margin="0 30px 0 0"
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.darkGrayColor}`}
                    title="취 소"
                />
                <Button
                    width={120}
                    height={50}
                    fontSize={18}
                    fontColor={colors.whiteColor}
                    bgColor={colors.darkBlueColor}
                    title="등 록"
                />
            </ButtonGroup>
        </Wrapper>
    )
}

export default AddMember;