import React from 'react';
import component from 'omniscient';

export default component(function Select ({value, options, style, className}) {
  let onChange = e => value.update(_ => options[e.target.selectedIndex]);
  return <select className={className} style={style} onChange={onChange} value={value.deref()}>
    {options.map((option, i) =>
      <option key={i} value={option}>{option}</option>
    )}
  </select>;
}).jsx;
