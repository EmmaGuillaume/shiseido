<script lang="ts">
  import CartProductList from "$lib/components/CartProductList.svelte";
</script>

<section class="flex flex-col px-8 pt-24">
  <a class="flex gap-2" href="/.">
    <img src="images/icons/arrow-left.svg" alt="" />
    <h2 class="text-2xl text-center uppercase font-shiseido md:text-4xl">
      cart
    </h2>
  </a>

  <section>
    <CartProductList />
  </section>
</section>
