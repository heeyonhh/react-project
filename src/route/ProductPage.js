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
                    <Tab label="커피" />
                    <Tab label="음료" />
                    <Tab label="사이드" />
                </Tabs>
            </Box>
            {productData.map((a, i) =>
            <Box className="md_wrap">
                <Box className="md" key={i}>
                    <div className='productimgwrap'>
                        <img className="productimg" src={`/img/productimg${productData[i].id + 1}.png`} />
                    </div>
                    <h4 className='title'>{productData[i].title}</h4>
                    <p className='content'>{productData[i].content}</p>
                    <p className='price'>{productData[i].price}</p>
                </Box>
            </Box>
            )
            }
        </Grid>
    )
};

export default ProductPage;