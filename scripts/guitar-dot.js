import React from 'react';
import component from 'omniscient';

import '../less/guitar-dot.less';

export default component(function GuitarDot ({text, color, isRoot}) {
  let className = 'guitar-dot' + (isRoot ? ' guitar-dot--root' : '');
  return <span className={className} title={text} style={{ backgroundColor: color }}></span>;
}).jsx;
