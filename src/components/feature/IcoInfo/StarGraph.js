import React from 'react';
import styled from "styled-components";
import yellowStar from "../../../images/yellowStar.svg"
import grayStar from "../../../images/grayStar.svg"

const StartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppImage = styled.img``;

const StarGraph = ({ value }) => {
    const IntegerValue = value * 5 / 100;
    const Percent = Math.round(IntegerValue);

    return (
        <StartBox>
            {[...Array(Percent)].map((n, index) => <AppImage key={index} src={yellowStar} /> )}
            {[...Array(5 - Percent)].map((n, index) => <AppImage key={index} src={grayStar} /> )}
        </StartBox>
    )
}

export default StarGraph;