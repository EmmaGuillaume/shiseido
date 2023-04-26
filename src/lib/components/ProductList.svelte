<script lang="ts">
    import { productList } from "$lib/data/products";
    import ProductCard from "./ProductCard.svelte";
</script>

<section class="flex flex-col gap-4 p-3 bg-white border-[1px]">
    <!-- comme un for i  -->
    {#each productList as singleProduct}
        <ProductCard product={singleProduct} />
    {/each}
</section>
