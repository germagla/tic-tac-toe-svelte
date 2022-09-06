import { writable } from "svelte/store";

//HARDCODED BECAUSE I WAS GETTING WEIRD ERRORS WHEN USING Array(9).forEach()
export const Board = writable(Array(9).fill(null));

export const isXTurn = writable(true);

export const winner = writable(null);

