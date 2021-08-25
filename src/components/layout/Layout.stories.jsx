import * as React from 'react';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
  parameters: {
    component: Layout,
  },
};

export const Default = args => {
  return <Layout {...args} />;
};

Default.args = {
  children: <div>Content</div>,
  footer: <div>Footer</div>,
  header: <div>Header</div>,
};

Default.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  footer: {
    table: {
      disable: true,
    },
  },
  header: {
    table: {
      disable: true,
    },
  },
};
