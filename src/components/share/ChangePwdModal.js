import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "./Button";
import colors from "../../styles/colors";
import Dialog from "@mui/material/Dialog";


const ChangePwdModal = ({ open, onClose }) => {
    return (
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>비밀번호 변경</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="passwd"
                        label="비밀번호"
                        type="password"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="passwd2"
                        label="비밀번호 확인"
                        type="password"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions sx={{ paddingRight: 3, marginBottom: 3 }}>
                    <Button
                        width={100}
                        height={40}
                        title="취소"
                        fontSize={16}
                        fontWeight={600}
                        fontColor={colors.activePink}
                        bgColor={colors.whiteColor}
                        border={`1px solid ${colors.activePink}`}
                        onClick={onClose} />
                    <Button
                        width={100}
                        height={40}
                        title="변경"
                        fontSize={16}
                        fontWeight={600}
                        fontColor={colors.whiteColor}
                        bgColor={colors.textFieldBlue}
                        onClick={onClose} />
                </DialogActions>
            </Dialog>

    )
}

export default ChangePwdModal;