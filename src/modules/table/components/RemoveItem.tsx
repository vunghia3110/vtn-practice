import React, { memo } from 'react';
import { BiTrash } from 'react-icons/bi';

const RemoveItem = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px 0 10px',
        marginLeft: '10px',
        cursor: 'pointer',
      }}
    >
      <BiTrash style={{ fontSize: '20px', color: 'red' }} />
    </div>
  );
};

export default memo(RemoveItem);
