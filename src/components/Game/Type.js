import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'THOUGHTS tell the monomyth of timeless existence',
          'Each of the 49 pieces is a koan unto itself',
          "In it's totality, it is Science Fiction Satori ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
