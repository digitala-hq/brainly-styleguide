import * as React from 'react';
import FileHandler from './FileHandler';

export default {
  title: 'Components/FileHandler',
  parameters: {
    component: FileHandler,
  },
};

export const Default = args => {
  return <FileHandler {...args} />;
};

Default.args = {
  children: 'text',
};
