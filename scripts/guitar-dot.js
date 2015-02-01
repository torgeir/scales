import React from 'react';
import component from 'omniscient';

import '../less/guitar-dot.less';

export default component(function GuitarDot ({title, color, isRoot}) {
  let className = 'guitar-dot' + (isRoot ? ' guitar-dot--root' : '');
  var style = { backgroundColor: color };
  return <span className={className} title={title} style={style}></span>;
}).jsx;
