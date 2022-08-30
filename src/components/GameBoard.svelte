<script>
  import { BoardState } from "../stores.ts";
  import Tile from "./Tile.svelte";

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

</script>


<style>
  .gameboard{
      height: 50vw;
      width: 50vw;
  }
</style>


<div  class="gameboard grid grid-rows-3 grid-cols-3 border-solid border-2 border-black">
  {#each $BoardState as BoardTile, i}

      <div><Tile/></div>


  {/each}
</div>