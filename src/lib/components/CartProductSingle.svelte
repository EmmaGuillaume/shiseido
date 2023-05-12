<script lang="ts">
    import type { TProduct } from "$lib/data/products";
    export let product: TProduct;
</script>

<article class="w-full flex justify-between my-8">
    <div class="w-3/12">
        <img src="images/photos/about-us-cream.jpg" alt="" />
    </div>

    <div class="flex flex-col gap-1 w-6/12">
        <h3 class="font-noto text-lg">Title product Lala One more World</h3>
        <p class="font-noto text-sm">SKU: 0729238196476</p>
        <p class="font-noto text-lg">145 ml</p>
        <div class="flex gap-3 mt-3">
            <img src="images/icons/less.svg" alt="" />
            <p>1</p>
            <img src="images/icons/plus.svg" alt="" />
        </div>
    </div>
    <div class="flex gap-1">
        <a href="/.">
            <img class="w-9/12" src="/images/icons/heart-empty.svg" alt="" />
        </a>
        <a href="/.">
            <img class="w-9/12" src="/images/icons/close.svg" alt="" />
        </a>
    </div>
</article>
