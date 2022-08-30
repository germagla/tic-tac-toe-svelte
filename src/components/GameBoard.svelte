<script>
  import { BoardState } from "../stores.ts";
  import Tile from "./Tile.svelte";
</script>


<style>
  .gameboard{
      height: 50%;
      width: 50%;
  }
</style>


<div  class="gameboard grid grid-rows-3 grid-cols-3 border-solid border-2 border-black">
  {#each $BoardState as BoardTile, i}
    {#if BoardTile}

    {:else }
      <div><Tile/></div>

    {/if}

  {/each}
</div>