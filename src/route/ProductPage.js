import { useSelector } from "react-redux"

import '../App.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ProductPage() {

    const productData = useSelector((state) => state.productdata);

    return (
        <Grid>
            상품페이지임
            {productData.map((a, i)=>
                    <Box className="md" key={i}>
                        <div className='productimgwrap'>
                            <img className="productimg" src={`/img/productimg${productData[i].id + 1}.png`} />
                        </div>
                        <h4 className='title'>{productData[i].title}</h4>
                        <p className='content'>{productData[i].content}</p>
                        <p className='price'>{productData[i].price}</p>
                    </Box>
                )
            }
        </Grid>
    )
};

export default ProductPage;