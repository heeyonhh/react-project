import '../App.css';

import Box from '@mui/material/Box'

//메인 주문 영역
function Mainorder(props){ 
  return(
    <Box className="order_box">
      <div className='order_icon'>{props.order.icon}</div>
      <p className='order_text'>{props.order.name}</p>
    </Box>
  )
};

export default Mainorder;