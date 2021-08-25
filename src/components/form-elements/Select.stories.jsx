import * as React from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  parameters: {
    component: Select,
  },
};

export const Default = args => {
  return <Select {...args} />;
};

Default.args = {
  options: [
    {
      value: '1',
      text: 'option 1',
    },
    {
      value: '2',
      text: 'option 2',
    },
  ],
};
