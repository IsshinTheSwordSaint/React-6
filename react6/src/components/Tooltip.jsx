import { React } from 'react';

function Tooltip({ children, hint }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip-content">{hint}</div>
    </div>
  );
}

export default Tooltip;
