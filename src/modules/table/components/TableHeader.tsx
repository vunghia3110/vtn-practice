import React, { memo } from 'react';
import Filter from './Filter';
import Button from './Button';

const TableHeader = () => {
  return <div style={{display: 'flex', margin: '20px 0 20px 0', justifyContent: 'space-between'}}>
      <div id='filters' style={{display: 'flex'}}>
        <Filter onFilter={() => {}} type='status' name='Status' />
        <Filter onFilter={() => {}} type='status' name='Client' />
        <Filter onFilter={() => {}} type='date' name='Start at' />
        <Filter onFilter={() => {}} type='date' name='End at' />
        <Filter onFilter={() => {}} type='invoice' name='Invoice #' />
      </div>
      <div id='buttons' style={{display: 'flex'}}>
        <Button type='apply' onButton={() => {}}/>
        <Button type='clear' onButton={() => {}}/>
      </div>
    </div>;
};

export default memo(TableHeader);
