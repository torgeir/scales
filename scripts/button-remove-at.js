import React from 'react';
import component from 'omniscient';

import Button from './button';

export default component(function ButtonRemoveAt ({cursor, index, className}) {
  let onClick = e => cursor.update(cursor => cursor.splice(index, 1));
  return <Button className={className} onClick={onClick}>-</Button>;
}).jsx;
