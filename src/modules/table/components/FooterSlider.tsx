import React, { memo } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const FooterSlider = () => {
  const css = `
    .page-select {
      padding: 10px;
      cursor: pointer;
    }
  `;
  return (
    <div style={{ width: '250px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <style>{css}</style>
      <AiOutlineDoubleLeft style={{ color: '#0d6efd', cursor: 'pointer' }} />
      <span className="page-select fw-bold text-primary">1</span>
      <span className="page-select fw-bold text-primary">2</span>
      <span className="page-select fw-bold text-primary">3</span>
      <span className="page-select fw-bold text-primary">4</span>
      <AiOutlineDoubleRight style={{ color: '#0d6efd', cursor: 'pointer' }} />
    </div>
  );
};

export default memo(FooterSlider);
