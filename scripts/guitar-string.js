import React from 'react';
import component from 'omniscient';

import GuitarFret from './guitar-fret';
import {scaleRange} from './scales';

import '../less/guitar-string.less';

export default component(function GuitarString ({key, root, frets, scales, selection}) {
  let noteRange = scaleRange(root);
  let fretNotes = frets.toArray().map(_ => noteRange.next());

  let selectedModes = selection.map(scale => scale.get('mode'));

  return <ul key={key} className="guitar-string">
    {frets.toArray().map((_, i) => {
      let fretNote = fretNotes[i];
      let dots = getDotsForFret(scales.toArray(), selectedModes.toArray(), fretNote);
      let hasAllNotes = (dots.length > 1 && dots.length === selection.count());
      return <GuitarFret key={i} note={fretNote} dots={dots} hasAllNotes={hasAllNotes} />
    })}
  </ul>
}).jsx;

function getDotsForFret (scales, selectedModes, fretNote) {
  return scales.reduce((dots, scale, i) => {
    let notesAndColor = scale.get('modes').get(selectedModes[i]);
    let scaleHasNote = notesAndColor.get('notes').indexOf(fretNote) !== -1;
    if (!scaleHasNote) {
      return dots;
    }

    dots.push({
      note: fretNote,
      color: notesAndColor.get('color'),
      isRoot: fretNote === scale.get('note')
    });

    return dots;
  }, []);
}
