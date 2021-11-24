import React from 'react';
import Box from '@mui/material/Box';
import colors from "../../styles/colors";

const ContentBox = ({ children }) => {
    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'scroll',
            bgcolor: colors.defaultBgColor
        }}>
            {children}
        </Box>
    )
}

export default ContentBox;