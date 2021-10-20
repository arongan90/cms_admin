import React, {useEffect} from 'react';
import styled, {css} from 'styled-components';
import colors from '../../styles/Colors';
import Input from "../share/Input";
import Select from "../share/Select";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from "@mui/material/TextField";
import Button from "../share/Button";
import DaumPostcode from "react-daum-postcode";
import {Modal} from '@material-ui/core';

const Wrapper = styled.div`
  background: ${colors.backgroundColor};
`;
const InputBox = styled.div`
  width: 100%;
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

  // Input Style
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    height: 35px;
    padding: 0 10px;
  }

  .css-bkqowc-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
  }

  .css-aqhoke-MuiFormLabel-root-MuiInputLabel-root {
    top: -9px;
    font-size: 14px;
  }

  // Radio Style
  .css-18irotk-MuiButtonBase-root-MuiRadio-root {
    color: ${colors.grayColor};
  }
`;
const Title = styled.div`
  min-width: 130px;
  font-size: 16px;
  color: ${colors.blackColor};
  ${({paddingTop}) => paddingTop && css`
    padding-top: 5px;
  `}
`;
const AddressBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UnionServiceBox = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonGroup = styled.div`
  margin: ${({margin}) => margin ? margin : 0};
  text-align: center;
`;
const PostModal = styled(Modal)`
  width: 500px;
  margin: 10% auto;
`;
const AdditionalServiceBox = styled.div`
  .css-j204z7-MuiFormControlLabel-root { // CheckBox Style
    min-width: 150px;
  }
`;
const AdditionalService = styled.div`
  display: flex;

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root { // DatePicker Style
    width: 160px;
  }
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
                       unionService,
                       handleUnionService,
                       handleSetDate,
                       // 수정 props
                       updateCorpData,
                       modalVisible,
                       handleModalClose,
                   }) => {
    const {bizName, bizNum, bizAddress, bizDetailAddress, bizTel, ceoName, ceoPhone, managerName} = memberInfo;
    const {live, linkBinder, shopping, gate} = unionService;

    useEffect(() => {
        return setServiceType('');
    }, [setServiceType]);

    return (
        <Wrapper>
            <InputBox>
                <InputLine>
                    <Title>기업명</Title>
                    <Input
                        width={30}
                        value={bizName}
                        infoInputChange={infoInputChange}
                        name="bizName"
                        type="BIZ_NAME"
                        placeholder="기업의 이름을 입력해주세요."
                    />
                </InputLine>
                <InputLine>
                    <Title>사업자 번호</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={bizNum}
                        name="bizNum"
                        type="BIZ_NUM"
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
                            type="BIZ_DETAIL_ADDRESS"
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
                    <Title>대표자 명</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={ceoName}
                        name="ceoName"
                        type="CEO_NAME"
                        placeholder="대표자의 이름을 입력해주세요."
                    />
                </InputLine>
                <InputLine>
                    <Title>휴대폰 번호</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={ceoPhone}
                        name="CEO_PHONE"
                        type="PHONE"
                        placeholder="대표자의 휴대폰 번호를 입력해주세요."
                    />
                </InputLine>

                <InputLine>
                    <Title>담당자 명</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={managerName}
                        name="managerName"
                        type="MANAGER_NAME"
                        placeholder="담당자의 이름을 입력해주세요."
                    />
                </InputLine>
                <InputLine>
                    <Title>전화번호</Title>
                    <Input
                        width={30}
                        infoInputChange={infoInputChange}
                        value={bizTel}
                        name="bizTel"
                        type="BIZ_TEL"
                        placeholder="기업의 전화번호를 입력해주세요."
                    />
                </InputLine>

                <InputLine>
                    <Title>이용 기간</Title>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="시작일"
                            value={usedPeriod.start}
                            onChange={newValue => handleDateChange(newValue, 'START_USING')}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    &nbsp;~&nbsp;
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="종료일"
                            value={usedPeriod.finish}
                            onChange={newValue => handleDateChange(newValue, 'FINISH_USING')}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <ButtonGroup margin="0 0 0 20px">
                        <Button
                            width={52}
                            height={35}
                            title="6개월"
                            type="6_MONTH"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                        <Button
                            width={52}
                            height={35}
                            title="12개월"
                            type="12_MONTH"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                        <Button
                            width={52}
                            height={35}
                            title="18개월"
                            type="18_MONTH"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                        <Button
                            width={52}
                            height={35}
                            title="24개월"
                            type="24_MONTH"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                        <Button
                            width={52}
                            height={35}
                            title="30개월"
                            type="30_MONTH"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                        <Button
                            width={52}
                            height={35}
                            title="36개월"
                            type="36_MONTH"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                        <Button
                            width={52}
                            height={35}
                            title="초기화"
                            type="USED_PERIOD_RESET"
                            borderRadius="none"
                            border={`1px solid ${colors.borderColor}`}
                            bgColor={colors.whiteColor}
                            onClick={handleSetDate}
                        >
                        </Button>
                    </ButtonGroup>
                </InputLine>


                <InputLine>
                    <Title>상품 타입</Title>
                    <RadioGroup row aria-label="type" name="row-radio-buttons-group">
                        <FormControlLabel value="meet_up" control={<Radio/>} label="밋업" onChange={handleGoodsType}/>
                        <FormControlLabel value="union" control={<Radio/>} label="유니온" onChange={handleGoodsType}/>
                        <FormControlLabel value="gate" control={<Radio/>} label="게이트" onChange={handleGoodsType}/>
                    </RadioGroup>
                </InputLine>

                {/* 유니온 부가서비스 */}
                {((serviceType === 'union') || (serviceType === 'gate')) &&
                    <InputLine align="flex-start">
                        <UnionServiceBox>
                            <Title paddingTop>부가 서비스</Title>
                            <AdditionalServiceBox>
                                <AdditionalService>
                                    <FormControlLabel
                                        label="라이브방송"
                                        control={<Checkbox name="live" value={live.isService}
                                                           onChange={handleUnionService}/>}
                                    />
                                    {live.isService && (
                                        <>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="시작일"
                                                    value={live.period.start}
                                                    onChange={newValue => handleDateChange(newValue, 'LIVE_START')}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            &nbsp;~&nbsp;
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="종료일"
                                                    value={live.period.finish}
                                                    onChange={newValue => handleDateChange(newValue, 'LIVE_FINISH')}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            <ButtonGroup margin="0 0 0 20px">
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="6개월"
                                                    type="6_MONTH"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="12개월"
                                                    type="12_MONTH"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="18개월"
                                                    type="18_MONTH"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="24개월"
                                                    type="24_MONTH"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="30개월"
                                                    type="30_MONTH"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="36개월"
                                                    type="36_MONTH"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="초기화"
                                                    type="USED_PERIOD_RESET"
                                                    service="live"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                            </ButtonGroup>
                                        </>
                                    )}
                                </AdditionalService>
                                <AdditionalService>
                                    <FormControlLabel
                                        label="링크바인더"
                                        control={<Checkbox name="linkBinder" value={linkBinder.isService}
                                                           onChange={handleUnionService}/>}
                                    />
                                    {linkBinder.isService && (
                                        <>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="시작일"
                                                    value={linkBinder.period.start}
                                                    onChange={newValue => handleDateChange(newValue, 'LINK_BINDER_START')}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            &nbsp;~&nbsp;
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="종료일"
                                                    value={linkBinder.period.finish}
                                                    onChange={newValue => handleDateChange(newValue, 'LINK_BINDER_FINISH')}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            <ButtonGroup margin="0 0 0 20px">
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="6개월"
                                                    type="6_MONTH"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="12개월"
                                                    type="12_MONTH"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="18개월"
                                                    type="18_MONTH"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="24개월"
                                                    type="24_MONTH"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="30개월"
                                                    type="30_MONTH"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="36개월"
                                                    type="36_MONTH"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="초기화"
                                                    type="USED_PERIOD_RESET"
                                                    service="linkBinder"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                            </ButtonGroup>
                                        </>
                                    )}
                                </AdditionalService>
                                <AdditionalService>
                                    <FormControlLabel
                                        label="쇼핑몰"
                                        control={<Checkbox name="shopping" value={shopping.isService}
                                                           onChange={handleUnionService}/>}
                                    />
                                    {shopping.isService && (
                                        <>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="시작일"
                                                    value={shopping.period.start}
                                                    onChange={newValue => handleDateChange(newValue, 'SHOPPING_START')}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            &nbsp;~&nbsp;
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="종료일"
                                                    value={shopping.period.finish}
                                                    onChange={newValue => handleDateChange(newValue, 'SHOPPING_FINISH')}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            <ButtonGroup margin="0 0 0 20px">
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="6개월"
                                                    type="6_MONTH"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="12개월"
                                                    type="12_MONTH"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="18개월"
                                                    type="18_MONTH"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="24개월"
                                                    type="24_MONTH"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="30개월"
                                                    type="30_MONTH"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="36개월"
                                                    type="36_MONTH"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                                <Button
                                                    width={52}
                                                    height={35}
                                                    title="초기화"
                                                    type="USED_PERIOD_RESET"
                                                    service="shopping"
                                                    borderRadius="none"
                                                    border={`1px solid ${colors.borderColor}`}
                                                    bgColor={colors.whiteColor}
                                                    onClick={handleSetDate}
                                                >
                                                </Button>
                                            </ButtonGroup>
                                        </>
                                    )}
                                </AdditionalService>
                                {serviceType === 'gate' &&
                                    <AdditionalService>
                                        <FormControlLabel
                                            label="출입인증"
                                            control={<Checkbox name="gate" value={gate.isService}
                                                               onChange={handleUnionService}/>}
                                        />
                                        {gate.isService && (
                                            <>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="시작일"
                                                        value={gate.period.start}
                                                        onChange={newValue => handleDateChange(newValue, 'GATE_START')}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                &nbsp;~&nbsp;
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="종료일"
                                                        value={gate.period.finish}
                                                        onChange={newValue => handleDateChange(newValue, 'GATE_FINISH')}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                <ButtonGroup margin="0 0 0 20px">
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="6개월"
                                                        type="6_MONTH"
                                                        service="gate"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="12개월"
                                                        type="12_MONTH"
                                                        service="gate"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="18개월"
                                                        type="18_MONTH"
                                                        service="gate"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="24개월"
                                                        type="24_MONTH"
                                                        service="gate"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="30개월"
                                                        type="30_MONTH"
                                                        service="gate"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="36개월"
                                                        type="36_MONTH"
                                                        service="gate"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                    <Button
                                                        width={52}
                                                        height={35}
                                                        title="초기화"
                                                        type="USED_PERIOD_RESET"
                                                        service="shopping"
                                                        borderRadius="none"
                                                        border={`1px solid ${colors.borderColor}`}
                                                        bgColor={colors.whiteColor}
                                                        onClick={handleSetDate}
                                                    >
                                                    </Button>
                                                </ButtonGroup>
                                            </>
                                        )}
                                    </AdditionalService>
                                }
                            </AdditionalServiceBox>
                        </UnionServiceBox>
                    </InputLine>
                }
            </InputBox>

            <ButtonGroup margin="80px auto 20px">
                {!!modalVisible &&
                <Button
                    width={120}
                    height={50}
                    fontSize={18}
                    margin="0 30px 0 0"
                    bgColor={colors.whiteColor}
                    border={`1px solid ${colors.darkGrayColor}`}
                    title="취 소"
                    onClick={handleModalClose}
                />
                }
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