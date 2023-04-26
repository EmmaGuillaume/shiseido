<script lang="ts">
    import type { TProduct } from "$lib/data/products";
    export let product: TProduct;
</script>

<article>
    <div class="flex justify-between gap-8">
        <div class="font-shiseido uppercase flex gap-2 text-sm">
            <!-- TODO: faire un if pour new product et exclusive -->
            <p class="bg-light-grey px-4 pt-2 pb-1 w-fit">New</p>
            <p class="bg-light-grey px-4 pt-2 pb-1 w-fit">Exclusive</p>
        </div>
        <img src={product.image} alt="" />
    </div>
    <div class="flex gap-2 items-center">
        <p class="text-lg">☻☻☻☻☺</p>
        <p class="text-xs">{product.note}</p>
        <p class="text-xs">(2)</p>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-xl">{product.name}</p>
        <p class="text-sm">${product.price}</p>
    </div>
</article>
