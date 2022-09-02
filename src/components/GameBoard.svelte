<script>
  import { Board, isXTurn } from "../store.ts";
  import BoardTile from "./BoardTile.svelte";
  import { onMount } from "svelte";


  const calculateWinner = squares => {
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

  };

  const handleClick = (event) => {
    console.log(event.target);


  };

  const resetBoard = () => {
    //TODO: write resetBoard function
  };

  // let $isXTurn = true;


</script>


<div class="gameboard grid grid-rows-3 grid-cols-3 border-solid border-2 border-black">
    {#each $Board as Tile, index}
      <div on:click={()=>{
        if(Tile.value!==null)return;
        Tile.value = $isXTurn? 'X':'O';
        $isXTurn = !$isXTurn;
      }}>
        <BoardTile bind:value={Tile.value}/>
      </div>

    {/each}
</div>

<style>
    .gameboard {
        height: 50vw;
        width: 50vw;
        max-height: 65vh;
        max-width: 65vh;
    }
</style>
