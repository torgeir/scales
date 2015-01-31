import React from 'react';
import component from 'omniscient';

import GuitarFret from './guitar-fret';
import {scaleRange} from './scales';

import '../less/guitar-string.less';

export default component(function GuitarString ({root, frets, scales, selectedModes, selectedScales}) {
  let noteRange = scaleRange(root);
  let notes = frets.toArray().map(_ => noteRange.next());

  return <ul className="guitar-string">
    {frets.toArray().map((_, i) => {
      let fretNote = notes[i];
      let dots = scales.toArray().reduce((acc, scale, idx) => {
        let mode = selectedModes[idx];
        let scaleMode = scale.get('modes').get(mode);
        let scaleHasNote = scaleMode.get('notes').indexOf(fretNote) !== -1;
        let scaleRoot = scale.get('note');
        if (scaleHasNote) {
          acc.push({ color: scaleMode.get('color'), note: fretNote, isRoot: fretNote === scaleRoot });
        }
        return acc;
      }, []);
      let hasAllDots = (dots.length > 1 && dots.length === selectedScales.count());
      return <GuitarFret key={i} note={fretNote} dots={dots} hasAllNotes={hasAllDots} />
    })}
  </ul>
}).jsx;
