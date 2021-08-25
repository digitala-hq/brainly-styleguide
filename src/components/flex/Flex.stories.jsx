import * as React from 'react';
import Flex from './Flex';
import Box from '../box/Box';

export default {
  title: 'Components/Flex',
  parameters: {
    component: Flex,
  },
};

export const Default = args => {
  return <Flex {...args} />;
};

Default.args = {
  children: [<div>This is a element 1.</div>, <div>This is a element 2.</div>],
};
