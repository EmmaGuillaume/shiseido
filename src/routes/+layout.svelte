<script lang="ts">
    import HeaderDesktop from "$lib/components/HeaderDesktop.svelte";
    import HeaderMobile from "$lib/components/HeaderMobile.svelte";
    import "../app.css";
</script>

<HeaderMobile />
<HeaderDesktop />
<main class="-z-10 bg-white h-screen md:px-2 lg:px-12 xl:px-20 2xl:px-36">
    <slot />
</main>
