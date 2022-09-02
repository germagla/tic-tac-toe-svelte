import { writable } from "svelte/store";

//HARDCODED BECAUSE I WAS GETTING WEIRD ERRORS WHEN USING Array(9).forEach()
//TODO: hardcode bad, debug
export const Board = writable([
  { id: 0, value: null },
  { id: 1, value: null },
  { id: 2, value: null },
  { id: 3, value: null },
  { id: 4, value: null },
  { id: 5, value: null },
  { id: 6, value: null },
  { id: 7, value: null },
  { id: 8, value: null }
]);

export const isXTurn = writable(true);

