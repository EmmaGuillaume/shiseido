<script lang="ts">
  let article = 0;

  function cartOnClick() {
    article += 1;
  }
</script>

<section
  class="fixed top-0 left-0 z-50 flex items-center justify-between w-screen h-24 px-8 py-2 uppercase bg-white header font-noto"
>
  <nav class="flex gap-8 xl:gap-14">
    <a href="/.">Skincare</a>
    <a href="/.">Suncare</a>
    <a href="/.">Makeup</a>
    <a href="/.">Offers</a>
  </nav>
  <a href="./">
    <img
      src="/images/icons/logo-design.svg"
      alt="Retour à l'accueil"
      class="w-11/12"
    />
  </a>
  <nav class="flex gap-8 xl:gap-14">
    <a href="/.">Gifts and Sets</a>
    <a href="/.">search</a>
    <a href="/cart">Cart({article})</a>
    <a href="/.">search</a>
  </nav>
</section>

<style>
  @media screen and (max-width: 1024px) {
    .header {
      display: none;
    }
  }
</style>
