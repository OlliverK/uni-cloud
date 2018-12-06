import React from 'react';

const Scroll = (props) => {
  return (
    <div className='patop' style={{ overflow: 'scroll', border: '', height: '100vh'}}>
      {props.children}
    </div>
  );
};

export default Scroll;