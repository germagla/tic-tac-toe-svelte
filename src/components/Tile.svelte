<script>
  let handleClick = () => {
    value = value === 'X'? 'O' : 'X';
  };
  export let value;
</script>
<style>
    .remix {
        width: 55px;
        height: 55px;
        fill: #000;
    }
</style>
<div class="tile bg-white h-full w-full border-solid border-2 border-black" on:click={handleClick}>
  {#if value === 'X'}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    </svg>
  {/if}
</div>