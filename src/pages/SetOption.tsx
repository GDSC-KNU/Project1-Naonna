import React from 'react';
import OptionHeader from 'components/OptionHeader';
import LocationSelect from 'components/LocationSelect';

const SetOption = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '375px',
        border: '1px solid black',
      }}
    >
      <OptionHeader nowActive={2} />
      <LocationSelect />
    </div>
  );
};

export default SetOption;
