<script>
  import "../app.postcss";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar/>
<div class="h-16"></div>
<!--This is to prevent page content from being hidden under the navbar-->
<slot></slot>