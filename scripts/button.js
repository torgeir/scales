import React from 'react';
import component from 'omniscient';

export default component(({className, onClick, children}) =>
  <button className={className} onClick={onClick}>{children}</button>
).jsx;
