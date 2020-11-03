// @flow strict

import * as React from 'react';
import TopLayer from '../toplayer/TopLayer';
import Overlay from '../overlay/Overlay';

const OVERLAY_CLASS_NAME = 'sg-overlay';

type PropsType = {
  onOverlayClick?: (event?: SyntheticEvent<HTMLElement>) => mixed,
  closeModal?: () => mixed,
  lead?: boolean,
  children: React.Node,
  noPadding?: boolean,
  transparent?: boolean,
  size?: 'small' | 'medium' | 'large' | 'fluid',
  style?: {[string]: string, ...},
  className?: string,
  overlayColor?: 'blue' | 'dark',
  overlayClassName?: string,
  ...
};

const decorateOverlayClick = onOverlayClick => (
  event?: SyntheticEvent<HTMLElement>
) =>
  event &&
  event.currentTarget.classList.contains(OVERLAY_CLASS_NAME) &&
  // $FlowFixMe TODO(Tomek)
  event.target.classList.contains(OVERLAY_CLASS_NAME)
    ? onOverlayClick(event)
    : undefined;

export function Modal({
  children,
  size = 'medium',
  onOverlayClick = () => undefined,
  overlayClassName,
  overlayColor,
  closeModal,
  ...toplayerRestProps
}: PropsType) {
  const handleOverlayClick = decorateOverlayClick(onOverlayClick);

  return (
    <Overlay
      onClick={handleOverlayClick}
      className={overlayClassName}
      color={overlayColor || 'blue'}
    >
      {/* $FlowFixMe[cannot-spread-inexact] */}
      <TopLayer
        modal
        role="dialog"
        onClose={closeModal}
        {...(size === 'fluid' ? null : {size})}
        {...toplayerRestProps}
      >
        {children}
      </TopLayer>
    </Overlay>
  );
}
