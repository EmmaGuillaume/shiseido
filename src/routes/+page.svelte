<script>
  import ButtonAnimation from "$lib/components/ButtonAnimation.svelte";
  import ItemsButton from "$lib/components/ProductList.svelte";

  // import buttonContent from "./lib/components/ButtonAnimation.svelte";
</script>

<section class="flex flex-col items-center px-8 pt-24">
  <div class="flex justify-center w-10/12 mb-12 md:w-7/12 2xl:w-4/12 lg:mt-8">
    <h2 class="text-2xl text-center font-shiseido md:text-4xl">
      BEAUTY INNOVATIONS FOR A BETTER WORLD
    </h2>
  </div>
  <section class="flex w-full md:items-center">
    <img
      class="hidden md:inline md:w-4/12"
      src="/images/photos/vital-perfection-model-photo-d-1.png"
      alt=""
    />
    <div
      class="relative flex items-center justify-center w-full bg-no-repeat bg-cover h-72 bg-home-girl md:static md:bg-none md:flex-col md:gap-0 lg:gap-10"
    >
      <div
        class="flex flex-col items-center gap-2 text-center text-white text-md md:text-primary md:text-lg 2xl:text-xl"
      >
        <h3
          class="mb-4 text-xl font-shiseido md:text-2xl md:mb-2 lg:mb-10 2xl:text-3xl"
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

  <section class="w-full my-28 lg:flex lg:justify-center">
    <div>
      <p class="py-12 text-2xl font-shiseido">Find our bestsellers</p>
      <ItemsButton />
    </div>
  </section>

  <article class="relative flex flex-col justify-between w-full">
    <div class="z-20 flex flex-col gap-4">
      <p class="text-sm font-shiseido">About Us</p>
      <p class="text-2xl font-shiseido lg:w-3/12">
        For 150 years, Shiseido has pioneered the future of skincare to bring a
        truly holistic experience to your beauty routine.
      </p>
    </div>

    <div class="relative">
      <div
        class="z-0 overflow-hidden relative h-[500px] my-8 lg:h-[1000px] lg:overflow-visible"
      >
        <img
          loading="lazy"
          class="absolute top-0 z-0 w-6/12 about-us--img left-20 lg:w-3/12 lg:-top-24"
          src="images/photos/about-us-cream.jpg"
          alt=""
        />
        <img
          loading="lazy"
          class="absolute z-20 w-9/12 -right-12 top-10 lg:w-6/12 lg:top-36"
          src="/images/photos/about-us-red.jpg"
          alt=""
        />
        <img
          loading="lazy"
          class="absolute z-0 w-6/12 top-56 left-5 lg:w-5/12 lg:top-[400px]"
          src="/images/photos/about-us-cells.jpg"
          alt=""
        />
      </div>
      <div
        class="z-50 flex flex-col w-full gap-4 items-left lg:w-9/12 lg:mt-48"
      >
        <p class="z-30 text-sm font-shiseido">From Shiseido with love</p>
        <p class="z-30 text-2xl text-left font-shiseido lg:w-7/12">
          Buy a gift for Mother’s Day and we’ll send an extra treat for you,
          yours when you spend £95+*. <br />Code: GIFT
        </p>
        <div class="flex justify-center w-full mt-4">
          <ButtonAnimation>Shop Now</ButtonAnimation>
        </div>
      </div>
    </div>
  </article>
  <article class="flex flex-col w-full gap-16 mt-16 align-top">
    <div class="relative z-20 flex flex-col text-left">
      <p class="text-sm font-shiseido">Explore</p>
      <p class="text-3xl font-shiseido lg:w-3/12">BESTSELLERS</p>
      <p class="text-2xl font-shiseido lg:w-3/12">LAST CHANCES</p>
      <img
        loading="lazy"
        src="images/photos/make-up-bg.jpg"
        alt=""
        class="absolute right-0 w-4/12 -top-10 -z-10 md:hidden"
      />
    </div>
    <div class="flex flex-col text-left">
      <p class="text-2xl font-shiseido lg:w-3/12">SERUM FINDER</p>
      <p class="text-2xl font-shiseido lg:w-3/12">MOISTURIZER FINDER</p>
      <p class="text-2xl font-shiseido lg:w-3/12">EYE CARE FINDER</p>
      <p class="text-2xl font-shiseido lg:w-3/12">VIRTUAL SKIN ANALYSIS</p>
      <p class="text-2xl font-shiseido lg:w-3/12">DIGITAL MAKEUP ADVISOR</p>
    </div>
  </article>
  <article class="bg-award-products">
    <img loading="lazy" src="/images/photos/award-product.jpg" alt="" />
    <div class="text-white font-shiseido">
      <p>True beauty starts with the mind and skin in harmony</p>
      <div>
        <p>Discover our Award</p>
        <p>Winning Products</p>
      </div>
    </div>
    <ButtonAnimation>Shop Now</ButtonAnimation>
  </article>
</section>
