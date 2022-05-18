/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from 'react';
import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  cssProp?: CSSInterpolation;
  onClick?:React.MouseEventHandler;
}

const Pill = ({
  className,
  style,
  children,
  cssProp,
  onClick,
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
    onClick={onClick}
  >
    {children}
  </div>
);

export default Pill;
