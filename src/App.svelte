<script lang="ts">
  import Router from "svelte-spa-router";
  import Login from "./components/Login.svelte";
  import SignUp from "./components/SignUp.svelte";
  import NotFound from "./components/NotFound.svelte";
  let routes = {
    "/login": Login,
    "/signup": SignUp,

    "*": NotFound,
    //^^if none of the routes work, just for best practices
  };
</script>

<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    width: 94vw;
    height: 94vh;
    margin: 2vh 2vw;
  }
</style>
