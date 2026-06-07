import React, { useRef } from 'react';

const RenderCounter = ({ name }) => {
  const count = useRef(0);
  count.current++;
  
  return (
    <small 
      data-testid="render-count" 
      className="render-count"
      title={`Renders: ${count.current}`}
    >
      {count.current}
    </small>
  );
};

export default RenderCounter;
