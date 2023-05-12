<script lang="ts">
    import CartProductList from "$lib/components/CartProductList.svelte";
</script>

<section class="pt-24 px-8 flex flex-col">
    <a class="flex gap-2" href="/.">
        <img src="images/icons/arrow-left.svg" alt="" />
        <h2 class="uppercase text-2xl font-shiseido text-center md:text-4xl">
            cart
        </h2>
    </a>

    <section>
        <CartProductList />
    </section>
</section>
