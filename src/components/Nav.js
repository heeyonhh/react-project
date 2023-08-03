import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// 아이콘
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import ApprovalIcon from '@mui/icons-material/Approval';

function Nav() {
    
    let [value, setValue] = useState(0);
    let navigate = useNavigate();

    return (
        <Box className="BottomNav">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="메인" icon={<HomeRoundedIcon />} onClick={() => { navigate('/') }} />
                <BottomNavigationAction label="커피오더" icon={<CoffeeRoundedIcon />} onClick={() => { navigate('/order') }} />
                <BottomNavigationAction label="스탬프" icon={<ApprovalIcon />} onClick={() => { navigate('/stamp') }} />
            </BottomNavigation>
        </Box>
    );
};

export default Nav;