<script>
  import GameBoard from "../../components/GameBoard.svelte";
  import { isXTurn, winner, Board } from "../../store.ts";

  const resetBoard = () => {
    isXTurn.set(true);
    Board.set([
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null }
    ]); //TODO: again, hardcode bad, preferably use Array(9).fill() or something
    winner.set({});
  };

</script>

<div class="gamepage flex flex-col place-content-center place-items-center">
  <h1 class="p-8 text-4xl">..it's {$isXTurn ? "X's" : "O's"} turn..</h1>
  <GameBoard />
  <!--{#if $winner.decided}-->
  <button class="btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg m-9" on:click={resetBoard}>Play Again</button>
  <!--{/if}-->
</div>

<style>
    .gamepage {
        /*width: 95vw;*/
        height: 90vh;
        /*background-color: blue;*/
    }
</style>