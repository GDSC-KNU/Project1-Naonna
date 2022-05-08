/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from 'react';
import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  cssProp?: CSSInterpolation;
}

const Pill = ({
  className,
  style,
  children,
  cssProp,
}: PropsWithChildren<Props>) => (
  <div
    className={className}
    style={{
      ...style,
      borderRadius: 9999,
    }}
    css={css`
      ${cssProp}
    `}
  >
    {children}
  </div>
);

export default Pill;
