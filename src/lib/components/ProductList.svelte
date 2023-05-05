<script lang="ts">
    import { productList } from "$lib/data/products";
    import ProductCard from "./ProductCard.svelte";
</script>

<section class="flex gap-4">
    <!-- comme un for i  -->
    {#each productList as singleProduct}
        <ProductCard product={singleProduct} />
    {/each}
</section>
