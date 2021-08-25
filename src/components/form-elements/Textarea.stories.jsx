import * as React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  parameters: {
    component: Textarea,
  },
};

export const Default = args => {
  return <Textarea {...args} />;
};

Default.args = {};
