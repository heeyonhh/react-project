import '../App.css';
import { Link } from 'react-router-dom'

//메인 주문 영역
function Mainorder(props){ 

  return(
    <Link to="/productpage" className="order_box">
      <div className='order_icon'>{props.order.icon}</div>
      <p className='order_text'>{props.order.name}</p>
    </Link>
  )
};

export default Mainorder;