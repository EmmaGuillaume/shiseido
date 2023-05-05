<script lang="ts">
    import type { TProduct } from "$lib/data/products";
    export let product: TProduct;
</script>

<a href="./">
    <article class="bg-white border-[1px] p-3 h-[450px] w-[285px]">
        <div class="flex flex-col items-center gap-5">
            <div class="font-shiseido uppercase flex gap-2 text-sm w-full h-9">
                <!-- TODO: faire un if pour new product et exclusive -->
                {#if product.new == true}
                    <p class="bg-light-grey px-4 pt-2 pb-1 w-fit">New</p>
                {/if}
                {#if product.exclusive == true}
                    <p class="bg-light-grey px-4 pt-2 pb-1 w-fit">Exclusive</p>
                {/if}
            </div>
            <img src={product.image} alt="" class="w-10/12" />
        </div>
        <div class="flex pt-2 gap-2 items-center">
            <p class="text-lg">☻☻☻☻☺</p>
            <p class="text-xs">{product.note}</p>
            <p class="text-xs">(2)</p>
        </div>
        <div class="flex flex-col justify-between h-24 w-fit">
            <p class="text-xl">{product.name}</p>
            <p class="text-md">${product.price}</p>
        </div>
    </article>
</a>
