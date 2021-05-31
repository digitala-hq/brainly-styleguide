import * as React from 'react';
import Headline from './Headline';

export default {
  title: 'Components/Headline',
  parameters: {
    component: Headline,
  },
};

export const Default = args => <Headline {...args} />;
