import * as React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  parameters: {
    component: Dropdown,
  },
};

export const Default = args => {
  return <Dropdown {...args} />;
};

Default.args = {
  name: 'foo dropdown',
  links: [
    {
      label: 'brainly.pl',
      url: 'http://brainly.pl',
    },
    {
      label: 'brainly.com',
      url: 'http://brainly.com',
    },
  ],
};
