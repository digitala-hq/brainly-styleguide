// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type TextBitTypeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

type TextBitSizeType = 'small' | 'medium' | 'large' | 'xlarge';

type TextBitColorType =
  | 'blue-primary'
  | 'blue-secondary'
  | 'mint-primary'
  | 'mint-secondary'
  | 'lavender-primary'
  | 'lavender-secondary'
  | 'peach-primary'
  | 'peach-secondary'
  | 'mustard-primary'
  | 'mustard-secondary'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'white'
  | 'black';

export const TEXT_BIT_TYPE: {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
} = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div',
  SPAN: 'span',
};

export const TEXT_BIT_SIZE: {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
} = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
};

export const TEXT_BIT_COLOR: {
  BLUE_PRIMARY: 'blue-primary',
  BLUE_SECONDARY: 'blue-secondary',
  MINT_PRIMARY: 'mint-primary',
  MINT_SECONDARY: 'mint-secondary',
  PEACH_PRIMARY: 'peach-primary',
  PEACH_SECONDARY: 'peach-secondary',
  MUSTARAD_PRIMARY: 'mustard-primary',
  MUSTARAD_SECONDARY: 'mustard-secondary',
  LAVENDER_PRIMARY: 'lavender-primary',
  LAVENDER_SECONDARY: 'lavender-secondary',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light',
  WHITE: 'white',
  BLACK: 'black',
} = {
  BLUE_PRIMARY: 'blue-primary',
  BLUE_SECONDARY: 'blue-secondary',
  MINT_PRIMARY: 'mint-primary',
  MINT_SECONDARY: 'mint-secondary',
  PEACH_PRIMARY: 'peach-primary',
  PEACH_SECONDARY: 'peach-secondary',
  MUSTARAD_PRIMARY: 'mustard-primary',
  MUSTARAD_SECONDARY: 'mustard-secondary',
  LAVENDER_PRIMARY: 'lavender-primary',
  LAVENDER_SECONDARY: 'lavender-secondary',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light',
  WHITE: 'white',
  BLACK: 'black',
};

export type TextBitPropsType = {
  children: React.Node,
  type?: TextBitTypeType,
  size?: TextBitSizeType,
  color?: ?TextBitColorType,
  className?: ?string,
  inherited?: boolean,
  ...
};

const TextBit = ({
  children,
  type = TEXT_BIT_TYPE.H1,
  size,
  color,
  className,
  inherited,
  ...props
}: TextBitPropsType) => {
  const Type = type;
  const textClass = classNames(
    'sg-text-bit',
    {
      'sg-text-bit--inherited': inherited,
      [`sg-text-bit--${String(size)}`]: size && size !== TEXT_BIT_SIZE.MEDIUM,
      [`sg-text-bit--${color || ''}`]: color,
    },
    className
  );

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

export default TextBit;
