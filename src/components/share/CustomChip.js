import React from 'react';
import styled, {css} from "styled-components";
import Chip from "@mui/material/Chip";
import chipDelete from "../../images/chipDelete.svg";

const Chips = styled(Chip)`
  &:first-child {
    margin-top: 5px;
    margin-left: 5px;
  }

  & + & {
    margin-left: 5px;
    margin-top: 5px;
  }
`;
const AppImage = styled.img``;

const CustomChip = ({ item, onDelete, type }) => {
    return (
        <Chips
            label={item}
            deleteIcon={<AppImage src={chipDelete}/>}
            onDelete={() => onDelete(item, type && type)}
        />

    )
}

export default CustomChip;