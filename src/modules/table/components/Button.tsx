import React, { memo } from "react";

interface Props {
  type: string;
  onButton(): void; 
}

const Button = (props: Props) => {
  const { type, onButton } = props;

  const css = `
    button {
      min-width: 100px;
      padding: 10px;
      margin-left: 10px;
    }
  `
  return <div>
    <style>{css}</style>
    {type === 'apply' && (
      <button type="button" className="btn btn-outline-primary border-2">Apply</button>
    )}
    {type === 'clear' && (
      <button type="button" className="btn btn-outline-danger border-2">Clear</button>
    )}
  </div>
}

export default memo(Button)