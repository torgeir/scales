import React from 'react';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import component from 'omniscient';

import GuitarMenu from './guitar-menu';
import GuitarNeck from './guitar-neck';
import {Scales} from './scales';

import '../less/guitar.less';

export default component(function Guitar ({guitar}) {

  let scales = guitar.cursor('selected').toArray().map((selected, i) => Scales[selected.get('scale')][selected.get('note')]);
  let scalesCursor = Cursor.from(Immutable.fromJS(scales));

  let selection = guitar.cursor('selected');

  return <div className="guitar">
    <GuitarMenu scales={scalesCursor} selection={selection} />
    <GuitarNeck scales={scalesCursor} selection={selection} strings={guitar.cursor('strings')} frets={guitar.cursor('frets')} />
  </div>;
}).jsx;
