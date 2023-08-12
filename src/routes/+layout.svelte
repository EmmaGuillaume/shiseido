<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import HeaderDesktop from "$lib/components/HeaderDesktop.svelte";
  import HeaderMobile from "$lib/components/HeaderMobile.svelte";
  import "../app.css";
</script>

<HeaderMobile />
<HeaderDesktop />
<main class="bg-white -z-10 md:px-2 lg:px-12 xl:px-20 2xl:px-36">
  <slot />
  <Footer />
</main>
