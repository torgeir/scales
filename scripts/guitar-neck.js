import React from 'react';
import component from 'omniscient';

import GuitarFretNumbers from './guitar-fret-numbers';
import GuitarString from './guitar-string';

import '../less/guitar-neck.less';

export default component(function GuitarNeck ({guitar, scales, selectedModes, selectedScales}) {
  return <div className="guitar-neck">
    {guitar.cursor('strings').toArray().map((root, i) =>
      <GuitarString root={root}
                    frets={guitar.cursor('frets')}
                    scales={scales}
                    selectedModes={selectedModes}
                    selectedScales={selectedScales}/>
    )}
    <GuitarFretNumbers numbers={guitar.cursor('frets')}/>
  </div>
}).jsx;
