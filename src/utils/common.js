// 휴대폰 번호 자동 Hyphen 추가
export const autoHyphenPhoneNumber = phoneNumber => {
    return phoneNumber.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-");
}

// 사업자 번호 유효성 검사
export const checkCorporateRegNumber = number => {
    let numberMap = number.replace(/-/gi, '').split('').map(d => {
       return parseInt(d, 10);
    });

    if (numberMap.length === 10) {
        let keyArr = [1, 3, 7, 1, 3, 7 ,1, 3, 5];
        let chk = 0;

        keyArr.forEach((d, i) => {
           chk += d * numberMap[i];
        });

        chk += parseInt((keyArr[8] * numberMap[8]) / 10, 10);
        console.info(' chk ::: ', chk);

        return Math.floor(numberMap[9]) === ((10 - (chk % 10)) % 10);
    }

    return false;
}

// 사업자 번호 자동 Hyphen 추가
export const autoHyphenBizNumber = number => {
    if (number.length === 10) return number.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');

    return number;
}

// 숫자만 입력
export const inputOnlyNumber = value => {
    return value.replace(/[^0-9]/g,'');
}

// 소숫점 반환 및 천단위 콤마
export const numberAddComma = number => {
    if (number > 1) {
        return number.toLocaleString();
    } else {
        return parseFloat(number).toFixed(10);
    }
}