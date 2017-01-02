import React from 'react';
import AmortizationTableRow from './AmortizationTableRow';
import AmortizationTableHeader from './AmortizationTableHeader';
import moment from 'moment';
import { ScreenClassRender } from 'react-grid-system';

const getStyle = (screen) => {
  switch (screen) {
    case 'xl':
    case 'lg':
    case 'md':
      return { fontSize: '12px' };
    case 'sm':
      return { fontSize: '8px' };
    default:
      return { fontSize: '7px' };
  }
};

const AmortizationTable = (props) => (
  <ScreenClassRender style={getStyle}>
    <div className="amortization-table">
      <AmortizationTableHeader />
      {props.input.amortization.map((row, index) => (
        <AmortizationTableRow input={props.input} row={row} key={index} />
      ))}
    </div>
  </ScreenClassRender>
);

export default AmortizationTable;
