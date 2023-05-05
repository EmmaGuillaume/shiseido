<script>
    import ButtonAnimation from "$lib/components/ButtonAnimation.svelte";
    import ItemsButton from "$lib/components/ProductList.svelte";

    // import buttonContent from "./lib/components/ButtonAnimation.svelte";
</script>

<section class="pt-24 px-8 flex flex-col items-center">
    <div class="flex justify-center w-10/12 mb-12 md:w-7/12 2xl:w-4/12 lg:mt-8">
        <h2 class="text-2xl font-shiseido text-center md:text-4xl">
            BEAUTY INNOVATIONS FOR A BETTER WORLD
        </h2>
    </div>
    <section class="w-full flex md:items-center">
        <img
            class="hidden md:inline md:w-4/12"
            src="/images/photos/vital-perfection-model-photo-d-1.png"
            alt=""
        />
        <div
            class="relative flex w-full h-72 bg-cover bg-home-girl bg-no-repeat items-center justify-center md:static md:bg-none md:flex-col md:gap-0 lg:gap-10"
        >
            <div
                class="flex flex-col items-center text-white gap-2 text-md text-center md:text-primary md:text-lg 2xl:text-xl"
            >
                <h3
                    class=" mb-4 text-xl font-shiseido md:text-2xl md:mb-2 lg:mb-10 2xl:text-3xl"
                >
                    LIVE THE AGE YOU FEEL
                </h3>
                <p>Advanced skincare results</p>
                <p>Powered by innovation from Japan</p>
                <p>#THEAGEIFEEL</p>
            </div>
            <div class="absolute top-64 md:static md:mt-7">
                <ButtonAnimation>Discover</ButtonAnimation>
            </div>
        </div>
        <img
            class="hidden md:inline md:w-4/12"
            src="/images/photos/benefiance-model-photo-d-1.png"
            alt=""
        />
    </section>

    <section class="my-28 w-full">
        <p class="font-shiseido text-2xl py-12">Find our bestsellers</p>
        <ItemsButton />
    </section>
</section>
