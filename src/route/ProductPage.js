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

    return (
        <Grid className="productpage">
            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab className="pp_tab" label="커피" />
                    <Tab className="pp_tab" label="음료" />
                    <Tab className="pp_tab" label="사이드" />
                </Tabs>
            </Box>
            <Box className="p_wrap">
                {coffee.map((a, i) =>
                <Box className="p" key={i}>
                    <div className='p_img_wrap'>
                        <img className="p_img" src={`/img/coffeeimg${coffee[i].id}.png`} />
                    </div>
                    <h4 className='title'>{coffee[i].title}</h4>
                    <p className='content'>{coffee[i].content}</p>
                    <p className='price'>{coffee[i].price}</p>
                </Box>
                    )
                }
            </Box>
        </Grid>
    )
};

export default ProductPage;