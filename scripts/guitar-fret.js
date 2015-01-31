import React from 'react';
import component from 'omniscient';

import GuitarDot from './guitar-dot';

import '../less/guitar-fret.less';

export default component(function GuitarFret ({note, dots, key, hasAllNotes}) {
  dots = dots || [];
  let className = 'guitar-fret' + (hasAllNotes ? ' guitar-fret--all-notes': '');
  return <li className={className}>
    <div className="guitar-fret-note">{note}</div>
    <div className="guitar-fret-dots">
      {dots.map((d, i) =>
        <GuitarDot key={i} color={d.color} text={d.note} isRoot={d.isRoot} />
      )}
    </div>
  </li>
}).jsx;
