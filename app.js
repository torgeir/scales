require('6to5/polyfill');

import React from 'react';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';

import component from 'omniscient';
import immstruct from 'immstruct';

import Guitar from './scripts/guitar';
import InitialScales from './scripts/initial-scales';
import Modes from './scripts/modes';
import {Scales, AllNotes, scaleRange} from './scripts/scales';
import {range, color} from './scripts/util';

import './less/app.less';

let guitar = immstruct({
  selected: InitialScales,
  frets: range(24+1),
  strings: 'ehgdae'.split('')
});

render();
guitar.on('swap', render);

function render () {
  let scales = guitar.cursor('selected').toArray().map((selected, i) => Scales[selected.get('scale')][selected.get('note')]);
  let scalesCursor = Cursor.from(Immutable.fromJS(scales));
  React.render(<Guitar guitar={guitar.cursor()} scales={scalesCursor} />, document.body);
}

import FastClick from 'fastclick';
FastClick.attach(document.body);
