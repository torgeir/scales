import React from 'react';
import component from 'omniscient';

import GuitarMenu from './guitar-menu';
import GuitarNeck from './guitar-neck';

import '../less/guitar.less';

export default component(function Guitar ({guitar, scales}) {
  let selectedScales = guitar.cursor('selected');
  let selectedModes = selectedScales.map(selected => selected.get('mode')).toArray();
  return <div className="guitar">
    <GuitarMenu scales={scales} selectedScales={selectedScales} selectedModes={selectedModes} />
    <GuitarNeck scales={scales} selectedScales={selectedScales} selectedModes={selectedModes} guitar={guitar} />
  </div>;
}).jsx;
