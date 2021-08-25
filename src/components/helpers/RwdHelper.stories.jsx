import * as React from 'react';
import RwdHelper, {TYPE} from './RwdHelper';

export default {
  title: 'Components/RwdHelper',
  parameters: {
    component: RwdHelper,
  },
};

export const Default = args => {
  return <RwdHelper {...args} />;
};

Default.args = {
  hide: TYPE.MEDIUM_DOWN,
  children: 'This is visible only for large screens only',
};
