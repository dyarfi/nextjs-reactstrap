import React, { memo } from 'react';

import { EmployeeCard, EmployeeVCard } from '../../card';
import { CARDS } from '../../../constants/cards';

const EmployeePage = memo(props => {
  const { dispatch, storeLayout, id } = props;

  return (
    <>
      <h1>Cards</h1>
      <h4>V-Card Default</h4>
      <EmployeeCard items={CARDS.employees} />
      <div className="d-block clearfix"></div>
      <h4>V-Card Square</h4>
      <EmployeeVCard items={CARDS.employees} />      
    </>
  );
});

export default EmployeePage;
