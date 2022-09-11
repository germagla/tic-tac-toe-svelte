<script>
  import GameBoard from "../../components/GameBoard.svelte";
  import { isXTurn, winner, Board } from "../../store.ts";

  const resetBoard = () => {
    isXTurn.set(true);
    Board.set(Array(9).fill(null));
    winner.set(null);
  };

</script>

<div class="gamepage flex flex-col place-content-center place-items-center">
  {#if !$winner}
    <h1 class="p-8 text-4xl text-secondary">..it's {$isXTurn ? "X's" : "O's"} turn..</h1>
    <GameBoard />
  {:else}
    <h1 class="p-8 text-4xl text-primary">{$winner} wins!</h1>
    <GameBoard />
    <button class="btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg m-9"
            on:click={resetBoard}>Play Again</button>
  {/if}
</div>

<style>
    .gamepage {
        /*width: 95vw;*/
        height: 90vh;
        /*background-color: blue;*/
    }
</style>