import React from 'react';
import component from 'omniscient';

import GuitarFretNumbers from './guitar-fret-numbers';
import GuitarString from './guitar-string';

import '../less/guitar-neck.less';

export default component(({strings, frets, scales, selection}) =>
  <div className="guitar-neck">
    {strings.toArray().map((root, i) =>
      <GuitarString key={i}
                    root={root}
                    frets={frets}
                    scales={scales}
                    selection={selection} />
    )}
    <GuitarFretNumbers numbers={frets}/>
  </div>
).jsx;
