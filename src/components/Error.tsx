import React from 'react';

export const Error = ({ text }: { text: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      paddingTop: 120,
    }}
  >
    <img src="/image/ui-svg/alert.svg" alt="alert Icon" />
    <h1 style={{ fontSize: 25 }}>{text}</h1>
  </div>
);
