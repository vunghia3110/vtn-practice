import React from 'react';
import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

interface Props {
  name: string;
  prioriry: string;
}
const Todo = (props: Props) => {
  const { name, prioriry } = props;
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      {prioriry === 'High' && <Tag color='red' style={{ margin: 0 }}>
        {prioriry}
      </Tag>}
      {prioriry === 'Medium' && <Tag color='blue' style={{ margin: 0 }}>
        {prioriry}
      </Tag>}
      {prioriry === 'Low' && <Tag color='gray' style={{ margin: 0 }}>
        {prioriry}
      </Tag>}
    </Row>
  );
}

export default Todo
