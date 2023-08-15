<script lang="ts">
  import type { TProduct } from "$lib/data/products";
  import ProductNote from "$lib/components/product/ProductNote.svelte";
  export let product: TProduct;
  const productNote = product.note;
</script>

<a href="./">
  <article class="bg-white border-[1px] p-3 h-[450px] w-[285px]">
    <div class="flex flex-col items-center gap-5">
      <div class="flex w-full gap-2 text-sm uppercase font-shiseido h-9">
        <!-- TODO: faire un if pour new product et exclusive -->
        {#if product.new == true}
          <p class="px-4 pt-2 pb-1 bg-light-grey w-fit">New</p>
        {/if}
        {#if product.exclusive == true}
          <p class="px-4 pt-2 pb-1 bg-light-grey w-fit">Exclusive</p>
        {/if}
      </div>
      <img src={product.image} alt="" class="w-10/12" />
    </div>
    <div class="flex flex-col justify-between h-36">
      <div class="flex items-center gap-2 pt-2">
        <!-- {#each productNote as singleProduct} -->
        <!-- {/each} -->
        <ProductNote {product} />
        <p class="text-sm">{product.note}</p>
        <p class="text-xs">(2)</p>
      </div>
      <div class="flex flex-col justify-end h-24 gap-4 font-noto-light w-fit">
        <p class="items-start text-xl align-top">{product.name}</p>
        <p class="text-md">${product.price}</p>
      </div>
    </div>
  </article>
</a>
