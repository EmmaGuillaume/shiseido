<script lang="ts">
  import { productList } from "$lib/data/products";
  import ProductCard from "$lib/components/ProductCard.svelte";
</script>

<article class="w-full overflow-x-auto lg:overflow-visible">
  <div class="flex gap-5">
    {#each productList as singleProduct}
      <ProductCard product={singleProduct} />
    {/each}
  </div>
  <!-- comme un for i  -->
</article>
