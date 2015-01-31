let colors = [ "#2EaDd4", "#a7d844", "#ff7F02", "#B2419D", "#BD1550", "#F8CA00", "#686868" ];
let i = 0;
export let color = () => colors[i++ % colors.length];

export let range = to => Array(to + 1).join().split('');

export function rotateString (arr, n) {
  if (n === 0) return arr;
  return rotateString(shift(arr), n - 1);
}

function shift (arr) {
  let head = arr.shift();
  arr.push(head);
  return arr;
}
