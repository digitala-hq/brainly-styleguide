import * as React from 'react';
import Footer from './Footer';
import FooterLine from './FooterLine';

export default {
  title: 'Components/Footer',
  parameters: {
    component: Footer,
  },
};

export const Default = args => {
  return <Footer {...args} />;
};

Default.args = {
  children: [
    <FooterLine>line</FooterLine>,
    <FooterLine>line</FooterLine>,
    <FooterLine>line</FooterLine>,
  ],
};
