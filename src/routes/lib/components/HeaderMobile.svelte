<script lang="ts">
    $: hambOpen = false;
    function handleClickBurger() {
        hambOpen = !hambOpen;
    }
</script>

<section class="w-screen">
    <div class="bg-white flex justify-between items-center px-4 py-2">
        <button on:click={handleClickBurger} class="font-noto">
            {#if hambOpen}
                <img src="/images/icons/close.svg" alt="" />
            {:else}
                <img src="/images/icons/burger.svg" alt="" />
            {/if}
        </button>
        <a href="/.">
            <img
                src="/images/icons/logo-design.svg"
                alt="Retour à l'accueil"
                class="w-11/12"
            />
        </a>
        <div class="flex gap-4">
            <a href="/.">
                <img
                    src="/images/icons/search.svg"
                    alt="Rechercher un article"
                />
            </a>
            <a href="/.">
                <img src="/images/icons/shop.svg" alt="Aller dans le panier" />
            </a>
        </div>
    </div>

    <div
        class={`burger w-full bg-red-600 ${
            hambOpen === true ? "active" : "false"
        }`}
    >
        <p>Ouvert</p>
    </div>
</section>

<style>
    .burger {
        transform: translateX(-260%);
    }
    .burger.active {
        transform: translateX(0%);
    }
</style>
