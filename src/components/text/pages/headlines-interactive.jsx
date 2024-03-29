import * as React from 'react';
import Headline, {
  HEADLINE_TYPE,
  HEADLINE_SIZE,
  HEADLINE_COLOR,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from '../Headline';
import {TEXT_COLOR} from 'text/textConsts';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headlines = () => {
  const settings = [
    {
      name: 'type',
      values: HEADLINE_TYPE,
    },
    {
      name: 'size',
      values: HEADLINE_SIZE,
    },
    {
      name: 'color',
      values: HEADLINE_COLOR,
    },
    {
      name: 'transform',
      values: HEADLINE_TRANSFORM,
    },
    {
      name: 'align',
      values: HEADLINE_ALIGN,
    },
    {
      name: 'extraBold',
      values: Boolean,
    },
    {
      name: 'inherited',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Headline>Lorem Ipsum</Headline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.SMALL}
          color={HEADLINE_COLOR.WHITE}
        >
          We&apos;ve got your back!
        </Headline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Headline>
          Parent Headline component{' '}
          <Headline inherited type="span" color={TEXT_COLOR.MINT_DARK}>
            nested Headline inheriting styles from parent Headline
          </Headline>
        </Headline>
      </DocsActiveBlock>
    </div>
  );
};

export default Headlines;
