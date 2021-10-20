import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {setCategory} from "../../modules/navigator";
import {Link} from "react-router-dom";

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const {...other} = props;
    const {navigator} = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();

    const onActiveCategory = id => dispatch(setCategory(id));

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{...item, ...itemCategory, fontSize: 22, color: '#fff'}}>
                    Catbell Union
                </ListItem>
                <ListItem sx={{...item, ...itemCategory}}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Project Overview</ListItemText>
                </ListItem>

                <Box sx={{bgcolor: '#101F33'}}>
                    <ListItem sx={{py: 2, px: 3}}>
                        <ListItemText sx={{color: '#fff'}}>Union Members</ListItemText>
                    </ListItem>

                    {navigator.map(({id: childId, icon, active, path}) => {
                        return (
                            <ListItem
                                disablePadding
                                key={childId}
                                onClick={() => onActiveCategory(childId)}
                            >
                                <Link to={path}>
                                    <ListItemButton selected={active} sx={item}>
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText>{childId}</ListItemText>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )
                    })}

                    <Divider sx={{mt: 2}}/>
                </Box>

            </List>
        </Drawer>
    );
}

/*
<Box key={category.tab} sx={{bgcolor: '#101F33'}}>
    <ListItem sx={{py: 2, px: 3}}>
        <ListItemText sx={{color: '#fff'}}>{category}</ListItemText>
    </ListItem>

    {children.map(({id: childId, icon, active}) => {
        // console.info('map : ', category.tab);
        return (
            <ListItem disablePadding key={childId}
                      onClick={() => onActiveCategory(childId)}>
                <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })}

    <Divider sx={{mt: 2}}/>
</Box>
*/
