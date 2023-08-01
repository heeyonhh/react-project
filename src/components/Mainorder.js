import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mainorder = () => {
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const contentStyle = {
    position: 'absolute',
    color: hover ? '#FFAB49' : 'rgba(45, 45, 45, 0.87)'
  };

  let navigate = useNavigate();

  return (
    <div
      className="order_box"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => navigate('/order')}
    >
      <span style={contentStyle}>마우스를 올려보세요!</span>
    </div>
  );
};

export default Mainorder;