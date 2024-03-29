// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {HEADLINE_SIZE, HEADLINE_TYPE} from './headlineConsts';

export type HeadlineTypeType = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadlineSizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type HeadlineColorType =
  | 'black'
  | 'white'
  | 'gray'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'mint-dark'
  | 'peach-dark'
  | 'lavender-dark'
  | 'mustard-dark'
  | 'blue-dark';

export type HeadlineTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type HeadlineAlignType =
  | 'to-left'
  | 'to-center'
  | 'to-right'
  | 'justify';

export {
  HEADLINE_TYPE,
  HEADLINE_SIZE,
  HEADLINE_COLOR,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from './headlineConsts';

export type HeadlinePropsType = {
  children?: React.Node,
  size?: HeadlineSizeType,
  type?: HeadlineTypeType,
  color?: ?HeadlineColorType,
  transform?: ?HeadlineTransformType,
  align?: ?HeadlineAlignType,
  className?: ?string,
  extraBold?: ?boolean,
  inherited?: ?boolean,
  ...
};

const Headline = ({
  children,
  type = HEADLINE_TYPE.H1,
  size,
  extraBold,
  transform,
  align,
  color,
  className,
  inherited = false,
  ...props
}: HeadlinePropsType) => {
  const Type = type;
  const headlineClass = classNames(
    'sg-headline',
    {
      'sg-headline--inherited': inherited,
      [`sg-headline--${String(size)}`]: size && size !== HEADLINE_SIZE.MEDIUM,
      [`sg-headline--${String(color)}`]: color,
      [`sg-headline--${String(transform)}`]: transform,
      [`sg-headline--${align || ''}`]: align,
      'sg-headline--extra-bold': extraBold,
    },
    className
  );

  return (
    <Type {...props} className={headlineClass}>
      {children}
    </Type>
  );
};

export default Headline;
