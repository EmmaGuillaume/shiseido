import { writable } from "svelte/store";
import { browser } from "$app/environment";

import type { TProduct } from '$lib/data/products';

export type TStoredProduct = {
    images: TProduct[]
}
const defaultValue: string = JSON.stringify([{ images: [] }]);
const activeDefaultValue: string = JSON.stringify({ images: [] });

let stored = browser ? window.localStorage.getItem('storedImages') ?? defaultValue : defaultValue;
let activeStored = browser ? window.localStorage.getItem('activeStoredImages') ?? activeDefaultValue : activeDefaultValue;

export const selectedProducts = writable<TStoredProduct[] | []>(JSON.parse(stored));
export const activeSelectedImages = writable<TStoredProduct>(JSON.parse(activeStored));

