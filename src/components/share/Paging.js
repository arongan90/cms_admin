import React from 'react';
import styled from "styled-components";
import Pagination from "react-js-pagination";
import colors from "../../styles/colors";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

const Wrapper = styled.div`
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    width: 35px;
    height: 35px;
    font-size: 16px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.whiteColor};
    
    a {
      color: ${colors.textFieldBlue};
      font-size: 1rem;
      line-height: 1;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
    &:first-child,
    &:last-child,
    &:nth-child(2),
    &:nth-last-child(2) {
      text-align: center;
      svg {
        width: 80%;
      }
    }
    &.active {
      background-color: ${colors.activeBlue};
      border: none;
      a {
         color: ${colors.whiteColor};
      }
    }
  }
  .page-selection { 
    width: 48px; 
    height: 30px; 
    color: ${colors.activeBlue};
  }
`;

const Paging = ({
                    currentPage,
                    totalItemsCount,
                    onChange,
                    rowsPerPage,
                }) => {
    return (
        <Wrapper>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={rowsPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={10}
                prevPageText={<KeyboardArrowLeftIcon />}
                nextPageText={<KeyboardArrowRightIcon />}
                firstPageText={<FirstPageIcon />}
                lastPageText={<LastPageIcon />}
                onChange={onChange}
            />
        </Wrapper>
    )
}

export default Paging;