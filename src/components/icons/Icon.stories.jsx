import * as React from 'react';
import {ICON_SIZE} from '../avatar/Avatar';
import Icon, {TYPE, ICON_TAG_TYPE, ICON_COLOR} from './Icon';

export default {
  title: 'Components/Icon',
  parameters: {
    component: Icon,
  },
};

export const Default = args => {
  return <Icon {...args} />;
};

Default.args = {
  type: TYPE.ACADEMIC_CAP,
  className: 'some-class',
  color: ICON_COLOR.ADAPTIVE,
};

Default.argTypes = {
  type: {control: {type: 'select', options: TYPE}},
  tagType: {control: {type: 'select', options: ICON_TAG_TYPE}},
  size: {control: {type: 'select', options: ICON_SIZE}},
  color: {control: {type: 'select', options: ICON_COLOR}},
  className: 'string',
};
