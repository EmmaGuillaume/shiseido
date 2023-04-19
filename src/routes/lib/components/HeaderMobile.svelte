<script lang="ts">
    $: hambOpen = false;
    function handleClickBurger() {
        hambOpen = !hambOpen;
    }
</script>

<section class="fixed top-0 left-0 w-screen">
    <div class=" bg-white flex justify-between items-center px-4 py-2">
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
        <div class="min-h-screen flex flex-col gap-20 pt-20 pb-28 px-10">
            <div class="flex gap-1">
                <img src="/images/icons/search.svg" alt="" />
                <input
                    value="Rechercher"
                    class="border-b-[1px] w-7/12 border-b-primary text-secondary"
                    type="text"
                />
            </div>

            <div class="uppercase flex flex-col">
                <a href="/.">Sign In / Create Account</a>
                <a href="/.">my favorites</a>
                <a href="/.">Follow my order</a>
            </div>

            <div class="uppercase flex flex-col">
                <a href="/.">Skincare</a>
                <a href="/.">Suncare</a>
                <a href="/.">Makeup</a>
                <a href="/.">Offers</a>
                <a href="/.">Gifts and Sets</a>
            </div>
            <div class="uppercase flex flex-col">
                <a href="/.">Help</a>
            </div>
        </div>
    </div>
</section>

<style>
    .burger {
        transform: translateX(-260%);
    }
    .burger.active {
        transform: translateX(0%);
        width: 100%;
        height: 100vh;
        background-color: #ffffff;
    }
</style>
