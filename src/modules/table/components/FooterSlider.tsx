import React, { memo } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { BsChevronBarLeft, BsChevronBarRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const FooterSlider = () => {
  const css = `
    .page-select {
      padding: 10px;
      cursor: pointer;
    }
  `;
  return (
    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <style>{css}</style>
      <BsChevronBarLeft style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: 800 }} />
      <BsChevronLeft style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: 800 }} />
      <BsChevronRight style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: 800 }} />
      <BsChevronBarRight style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: 800 }} />
    </div>
  );
};

export default memo(FooterSlider);
