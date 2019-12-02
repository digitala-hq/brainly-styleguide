// @flow strict

import React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon, ICON_COLOR} = IconModule;

type PropsType = {size?: IconModule.IconSizeType, ...};

const Star = ({size, ...props}: PropsType) => (
  <span {...props} className="sg-rate-box__star">
    <Icon type="star" size={size} color={ICON_COLOR.ADAPTIVE} />
  </span>
);

export default Star;
