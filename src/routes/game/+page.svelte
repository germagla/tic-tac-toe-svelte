<script>
  import GameBoard from "../../components/GameBoard.svelte";
  import { isXTurn } from "../../store.ts";
</script>

<div class="gamepage flex flex-col place-content-center place place-items-center">
  <h1 class="p-8 text-4xl">..it's {$isXTurn? "X's" : "O's"} turn..</h1>
  <GameBoard/>
</div>

<style>
  .gamepage{
      /*width: 95vw;*/
      height: 90vh;
      /*background-color: blue;*/
  }
</style>