<script lang="ts">
    let article = 0;

    function cartOnClick() {
        article += 1;
    }
</script>

<section
    class="header fixed h-24 top-0 left-0 w-screen bg-white flex justify-between items-center px-8 py-2 uppercase font-noto"
>
    <div class="flex gap-8 xl:gap-14">
        <a href="/.">Skincare</a>
        <a href="/.">Suncare</a>
        <a href="/.">Makeup</a>
        <a href="/.">Offers</a>
    </div>
    <a href="/.">
        <img
            src="/images/icons/logo-design.svg"
            alt="Retour à l'accueil"
            class="w-11/12"
        />
    </a>
    <div class="flex gap-8 xl:gap-14">
        <a href="/.">Gifts and Sets</a>
        <a href="/.">search</a>
        <button on:click={cartOnClick} class="uppercase">Cart({article})</button
        >
        <a href="/.">search</a>
    </div>
</section>

<style>
    @media screen and (max-width: 1024px) {
        .header {
            display: none;
        }
    }
</style>
