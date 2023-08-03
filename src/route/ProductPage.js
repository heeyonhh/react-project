import { useState } from "react";
import { useSelector } from "react-redux"

import '../App.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ProductPage() {

    const coffee = useSelector((state) => state.coffee);
    const beverage = useSelector((state) => state.beverage);
    const side = useSelector((state) => state.side);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let currentCategory;
    switch (value) {
        case 0:
            currentCategory = coffee;
            break;
        case 1:
            currentCategory = beverage;
            break;
        case 2:
            currentCategory = side;
            break;
        default:
            currentCategory = coffee;
    }

    return (
        <Grid className="pp">
            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab className="pp_tab" label="커피" />
                    <Tab className="pp_tab" label="음료" />
                    <Tab className="pp_tab" label="사이드" />
                </Tabs>
            </Box>
            <Box className="p_wrap">
                {currentCategory.map((a, i) =>
                <Box className="p" key={i}>
                    <div className='p_img_wrap'>
                     <img className="p_img" src={`/img/${currentCategory === coffee ? 'coffee' : currentCategory === beverage ? 'beverage' : 'side'}${a.id}.png`} />
                    </div>
                    <h4 className='title'>{a.title}</h4>
                    <p className='content'>{a.content}</p>
                    <p className='price'>{a.price}</p>
                </Box>
                    )
                }
            </Box>
        </Grid>
    )
};

export default ProductPage;