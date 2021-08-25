import * as React from 'react';
import IconAsButton from './IconAsButton';

export default {
  title: 'Components/IconAsButton',
  parameters: {
    component: IconAsButton,
  },
};

export const Default = args => {
  return <IconAsButton {...args} />;
};

Default.args = {
  type: 'excellent',
};
