/** @jsxImportSource @emotion/react */
import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  row?: boolean;
  cssProp?: CSSInterpolation;
}

const Stack = ({
  className,
  children,
  style,
  row,
  cssProp,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        flexDirection: row ? 'row' : 'column',
      }}
      css={css`
        ${cssProp}
      `}
    >
      {children}
    </div>
  );
};

export default Stack;
