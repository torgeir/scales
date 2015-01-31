import React from 'react';
import component from 'omniscient';

import Button from './button';

export default component(function ButtonAddAfter ({cursor, index, className, addFn}) {
  let onClick = e => cursor.update(cursor => cursor.splice(index + 1, 0, addFn()));
  return <Button className={className} onClick={onClick}>+</Button>;
}).jsx;
