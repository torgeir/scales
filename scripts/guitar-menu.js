import React from 'react';
import Immutable from 'immutable';

import component from 'omniscient';

import Modes from './modes';
import InitialScales from './initial-scales';
import {AllNotes, AllScales} from './scales';
import Select from './select';
import ButtonRemoveAt from './button-remove-at';
import ButtonAddAfter from './button-add-after';

import '../less/guitar-menu.less';
export default component(function GuitarMenu ({selectedScales, selectedModes, scales}) {

  let addFn = () => Immutable.fromJS(InitialScales[0]);
  let singleAddButton = selectedScales.count() === 0
    ? <li><ButtonAddAfter cursor={selectedScales} index={0} addFn={addFn}/></li >
    : null;

  return <ul className="guitar-menu">
      {selectedScales.toArray().map((selectedScale, i) => {

        let selectedMode = selectedModes[i];
        let scale = scales.toArray().filter(s => s.get('note') === selectedScale.get('note') && s.get('scale') === selectedScale.get('scale'))[0];
        let interval = scale.get('interval');
        let possibleModes = Modes.slice(0, interval.length);
        let css = { backgroundColor: scale.get('modes').get(selectedMode).get('color') }

        return <li key={i} className="guitar-menu-row">
          <Select className="guitar-menu-item--s" style={css} value={selectedScale.cursor('note')} options={AllNotes} />
          <Select className="guitar-menu-item--m" style={css} value={selectedScale.cursor('scale')} options={AllScales} />
          <Select className="guitar-menu-item--l" style={css} value={selectedScale.cursor('mode')} options={possibleModes} />
          <ButtonRemoveAt index={i} cursor={selectedScales} className="guitar-menu-item--s" />
          <ButtonAddAfter index={i} cursor={selectedScales} className="guitar-menu-item--s" addFn={addFn} />
        </li>;
      })}
      {singleAddButton}
    </ul>
}).jsx;
