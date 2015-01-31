import React from 'react';
import component from 'omniscient';

export default component(function GuitarFretNumbers ({numbers}) {
  return <ul className="guitar-neck-numbers">
    {numbers.toArray().map((_, i) =>
      <li key={i} className="guitar-neck-number">{i === 0 ? 'Nut' : i}</li>
    )}
  </ul>;
}).jsx;
