import {range, color, rotateString} from './util';
import Modes from './modes';
import Intervals from './intervals';

let C = scaleRange('c');

export let AllNotes = range(12).map(_ => C.next());

export let Scales = Object.keys(Intervals).reduce((acc, name) => {
  let interval = Intervals[name];
  let scaleFn = root => scale(interval, root);
  acc[name] = generateScale(scaleFn, color, name, interval);
  return acc;
}, Intervals);

export let AllScales = Object.keys(Scales);

export function generateScale (scaleFn, color, scale, interval) {
  return AllNotes.reduce((acc, root) => {

    let modes = scaleFn(root).reduce((acc, notes, i) => {
      acc[Modes[i]] = { notes: notes, color: color() };
      return acc;
    }, {});

    acc[root] = { note: root, scale: scale, modes: modes, interval: interval };
    return acc;
  }, {});
}

export function scaleRange (root) {
  let notes = [ 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'h' ];
  let index = notes.indexOf(root);
  return {
    next: function (i) {
      let note = notes[index % notes.length];
      index = index + (i || 1);
      return note;
    }
  };
}

export function scale (intervals, root) {
  let R = scaleRange(root);
  let modeIntervals = createModeIntervals(intervals);
  return modeIntervals.map(interval => interval.map(Number).map(R.next));
}

function createModeIntervals (interval) {
  return range(interval.length).map((_, i) => rotateString(interval.split(''), i));
}
