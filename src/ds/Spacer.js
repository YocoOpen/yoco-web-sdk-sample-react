import React from 'react';

const Spacer = ({size, horizontal=false}) => {
  var px = 16;
  switch (size) {
    case 'xs':
      px = 4;
      break;
    case 'sm':
      px = 8;
      break;
    case 'md':
      px = 16;
      break;
    case 'lg':
      px = 24;
      break;
    case 'xl':
      px = 48;
      break;
    default:
      px = 48;
      break;
  }

  if (horizontal) {
    return <div style={{width: px}} />
  } else {
    return <div style={{height: px}} />
  }
}

export default Spacer;

