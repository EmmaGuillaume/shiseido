<script lang="ts">
  type locationCountry = {
    value: "usa" | "england" | "france" | "japan" | "korea";
    label: "United States" | "England" | "France" | "Japan" | "Korea";
  };
  const countryOptions: locationCountry[] = [
    { value: "usa", label: "United States" },
    { value: "england", label: "England" },
    { value: "france", label: "France" },
    { value: "japan", label: "Japan" },
    { value: "korea", label: "Korea" },
  ];
</script>

<footer class="px-8 my-20">
  <img
    src="/images/icons/logo-long.svg"
    alt="Retour à l'accueil"
    class="mb-8"
  />
  <div
    class="grid w-full grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-y-12 lg:gap-8 lg:gap-y-0"
  >
    <div>
      <p class="mb-2 text-md font-shiseido">Ways to Shop</p>

      <ul class="flex flex-col gap-3 text-sm font-noto">
        <li><a href="./">New Arrivals</a></li>
        <li><a href="./">Last Chance</a></li>
        <li><a href="./">Award Winners</a></li>
        <li><a href="./">Ultimune</a></li>
        <li><a href="./">Offers</a></li>
        <li><a href="./">Terms of Sales</a></li>
        <li><a href="./">Store Locator</a></li>
        <li><a href="./">Key Worker Discount</a></li>
        <li><a href="./">Student Discount</a></li>
      </ul>
    </div>
    <ul class="flex flex-col justify-between">
      <div class="flex flex-col gap-2">
        <label for="country-select" class="text-md font-shiseido"
          >Select Country:</label
        >
        <select
          id="country-select"
          class="w-full py-2 pl-4 capitalize bg-white border lg:w-52 border-primary font-shiseido placeholder:text-primary focus:outline-red"
        >
          {#each countryOptions as countryOption}
            <option value={countryOption.value}>{countryOption.label}</option>
          {/each}
        </select>
      </div>
      <div>
        <p class="text-md font-shiseido">Let’s connect</p>
        <div class="flex gap-2">
          <img
            src="/images/icons/facebook.svg"
            alt="Retour à l'accueil"
            class=""
          />
          <img
            src="/images/icons/instagram.svg"
            alt="Retour à l'accueil"
            class=""
          />
          <img
            src="/images/icons/youtube.svg"
            alt="Retour à l'accueil"
            class=""
          />
        </div>
      </div>
      <form action="" class="flex flex-col gap-2">
        <p class="text-md font-shiseido">Join our Newsletter</p>

        <input
          class="w-full px-4 py-2 capitalize border lg:w-52 border-primary font-shiseido placeholder:text-primary focus:outline-red"
          type="text"
          placeholder="Your email adress"
        />
        <button
          class="flex justify-center w-full py-2 uppercase border lg:w-52 border-primary font-shiseido hover:bg-light-grey hover:text-red hover:border-secondary"
          type="submit">Submit</button
        >
      </form>
    </ul>

    <div>
      <p class="mb-2 text-md font-shiseido">About Shiseido</p>

      <ul class="flex flex-col gap-3 text-sm font-noto">
        <li><a href="./">Who We Are</a></li>
        <li><a href="./">Terms and Conditions</a></li>
        <li><a href="./">Privacy Policy</a></li>
        <li><a href="./">Cookie Policy</a></li>
        <li><a href="./">Refer a Friend</a></li>
        <li><a href="./">Gender Pay Gap Report</a></li>
        <li><a href="./">Careers</a></li>
        <li><a href="./">Contact us</a></li>
      </ul>
    </div>

    <div>
      <p class="mb-2 text-md font-shiseido">Products and Services</p>

      <ul class="flex flex-col gap-3 text-sm font-noto">
        <li><a href="./">Track order</a></li>
        <li><a href="./">Orders & Shippinge</a></li>
        <li><a href="./">Customer Service</a></li>
        <li><a href="./">eGift Cards</a></li>
      </ul>
    </div>
  </div>
</footer>

<style>
</style>
