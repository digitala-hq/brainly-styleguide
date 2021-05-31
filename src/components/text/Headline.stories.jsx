import * as React from 'react';
import Headline from './Headline';

export default {
  title: 'Components/Headline',
  parameters: {
    component: Headline,
  },
};

export const Default = () => (
  <Headline size="large" type="h1" color="blue-dark">
    Headline
  </Headline>
);
