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

  <section class="my-28 w-full lg:flex lg:justify-center">
    <div>
      <p class="font-shiseido text-2xl py-12">Find our bestsellers</p>
      <ItemsButton />
    </div>
  </section>

  <article class="w-full relative flex flex-col justify-between">
    <div class=" flex flex-col gap-4 z-20">
      <p class="font-shiseido text-sm">About Us</p>
      <p class="font-shiseido text-2xl lg:w-3/12">
        For 150 years, Shiseido has pioneered the future of skincare to bring a
        truly holistic experience to your beauty routine.
      </p>
    </div>

    <div class="relative">
      <div
        class="z-0 overflow-hidden relative h-[500px] my-8 lg:h-[1000px] lg:overflow-visible"
      >
        <img
          class="about-us--img absolute top-0 z-0 w-6/12 left-20 lg:w-3/12 lg:-top-24"
          src="images/photos/about-us-cream.jpg"
          alt=""
        />
        <img
          class="absolute z-20 w-9/12 -right-12 top-10 lg:w-6/12 lg:top-36"
          src="/images/photos/about-us-red.jpg"
          alt=""
        />
        <img
          class="absolute z-0 w-6/12 top-56 left-5 lg:w-5/12 lg:top-[400px]"
          src="/images/photos/about-us-cells.jpg"
          alt=""
        />
      </div>
      <div
        class="z-50 w-full flex flex-col items-left gap-4 lg:w-9/12 lg:mt-48"
      >
        <p class="z-50 font-shiseido text-sm">From Shiseido with love</p>
        <p class="z-50 text-left font-shiseido text-2xl lg:w-7/12">
          Buy a gift for Mother’s Day and we’ll send an extra treat for you,
          yours when you spend £95+*. <br />Code: GIFT
        </p>
        <div class="w-full flex justify-center">
          <ButtonAnimation>Shop Now</ButtonAnimation>
        </div>
      </div>
    </div>
  </article>

  <article />
</section>
