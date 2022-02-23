import React, { memo } from 'react';
import Filter from './Filter';

const TableHeader = () => {
  return <div>
      <Filter onFilter={() => {}} type='text' name='Status' />
      <Filter onFilter={() => {}} type='text' name='Client' />
      <Filter onFilter={() => {}} type='date' name='Start at' />
      <Filter onFilter={() => {}} type='date' name='End at' />
    </div>;
};

export default memo(TableHeader);
