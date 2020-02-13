import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 15px',
        width: '100%',
      }}>
      <PulseLoader color='#3e1a30' size='24px' />
    </div>
  );
}

export default Loader;
