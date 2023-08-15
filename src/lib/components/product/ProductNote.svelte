<script lang="ts">
  import type { TProduct } from "$lib/data/products";
  export let product: TProduct;
  const notes = product.note;
</script>

{#if notes === 1}
  <img src="images/icons/star.svg" alt="" />
{/if}

{#if notes === 2}
  <div class="flex">
    <img src="images/icons/star.svg" alt="" /><img
      src="images/icons/star.svg"
      alt=""
    />
  </div>
{/if}
{#if notes === 3}
  <div class="flex">
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
  </div>
{/if}
{#if notes === 4}
  <div class="flex">
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
  </div>
{/if}
{#if notes === 5}
  <div class="flex">
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
    <img src="images/icons/star.svg" alt="" />
  </div>{/if}
