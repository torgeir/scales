import React from 'react';
import component from 'omniscient';

import Button from './button';

export default component(function ButtonAddAfter ({cursor, index, className, adder}) {
  let onClick = _ => cursor.update(list => list.splice(index + 1, 0, adder(index)));
  return <Button className={className} onClick={onClick}>+</Button>;
}).jsx;
