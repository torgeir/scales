import React from 'react';
import Immutable from 'immutable';

import component from 'omniscient';

import InitialScales from './initial-scales';
import Modes from './modes';
import {AllNotes, AllScales} from './scales';
import Select from './select';
import ButtonRemoveAt from './button-remove-at';
import ButtonAddAfter from './button-add-after';

import '../less/guitar-menu.less';

export default component(function GuitarMenu ({selection, scales}) {

  let selectedModes = selection.map(scale => scale.get('mode')).toArray();

  let adder = _ => Immutable.fromJS(InitialScales[0]);
  let singleAddButton = selection.isEmpty()
                          ? <li className="guitar-menu-row">
                              <ButtonAddAfter cursor={selection} className="guitar-menu-item--s" index={0} adder={adder}/>
                            </li>
                          : null;

  return <ul className="guitar-menu">
      {selection.toArray().map((selectionScale, i) => {
        let scale = scales.toArray().filter(s => s.get('note') === selectionScale.get('note') && s.get('scale') === selectionScale.get('scale'))[0];

        let style = { backgroundColor: scale.get('modes').get(selectedModes[i]).get('color') };

        let possibleModes = Modes.slice(0, scale.get('interval').length);

        return <li key={i} className="guitar-menu-row">
          <Select className="guitar-menu-item--s" style={style} value={selectionScale.cursor('note')} options={AllNotes} />
          <Select className="guitar-menu-item--m" style={style} value={selectionScale.cursor('scale')} options={AllScales} />
          <Select className="guitar-menu-item--l" style={style} value={selectionScale.cursor('mode')} options={possibleModes} />
          <ButtonRemoveAt index={i} cursor={selection} className="guitar-menu-item--s" />
          <ButtonAddAfter index={i} cursor={selection} className="guitar-menu-item--s" adder={adder} />
        </li>;
      })}
      {singleAddButton}
    </ul>
}).jsx;
