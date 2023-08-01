import '../App.css';

import Box from '@mui/material/Box';

// 메인 추천 메뉴
function Product(props) {
    return (
      <Box className='md'>
        <img className="productimg" src={'/img/productimg' + (props.i + 1) + '.png'} />
        <h4 className='title'>{props.product.title}</h4>
        <p className='content'>{props.product.content}</p>
        <p className='price'>{props.product.price}</p>
      </Box>
    )
  };

export default Product;