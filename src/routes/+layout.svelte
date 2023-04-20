<script lang="ts">
    import "../app.css";
    import HeaderDesktop from "./lib/components/HeaderDesktop.svelte";
    import HeaderMobile from "./lib/components/HeaderMobile.svelte";
</script>

<HeaderMobile />
<HeaderDesktop />
<main class="bg-white h-screen">
    <slot />
</main>
