require('6to5/polyfill');

import React from 'react';

import component from 'omniscient';
import immstruct from 'immstruct';

import Guitar from './scripts/guitar';
import InitialScales from './scripts/initial-scales';
import {range} from './scripts/util';

import './less/app.less';

let guitar = immstruct({
  selected: InitialScales,
  frets: range(24+1),
  strings: 'ehgdae'.split('')
});

render();
guitar.on('swap', render);

function render () {
  React.render(<Guitar guitar={guitar.cursor()} />, document.body);
}

import FastClick from 'fastclick';
FastClick.attach(document.body);
