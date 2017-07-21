import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
  NORMAL: 'normal'
};

const COLOR = {
  NORMAL: 'normal',
  LIGHT: 'light',
  LIGHT_ALT: 'light-alt'
};

const TextInput = props => {
  const {
    type = 'text',
    size = SIZE.NORMAL,
    color = COLOR.NORMAL,
    fullWidth,
    withIcon,
    noBorder,
    value,
    valid,
    invalid,
    className,
    ...additionalProps
  } = props;

  const inputClass = classnames('sg-input', className, {
    [`sg-input--${size}`]: size !== SIZE.NORMAL,
    [`sg-input--${color}`]: color !== COLOR.NORMAL,
    'sg-input--valid': valid,
    'sg-input--invalid': invalid,
    'sg-input--full-width': fullWidth,
    'sg-input--no-border': noBorder,
    'sg-input--with-icon': withIcon
  });

  return <input type={type} className={inputClass} value={value} {...additionalProps}/>;
};

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noBorder: PropTypes.bool,
  withIcon: PropTypes.bool,
  className: PropTypes.string
};

export default TextInput;
export {SIZE, COLOR};
