export type TProduct = {
    name: string,
    image: string,
    note: number,
    price: number,
    new: boolean,
    exclusive: boolean,
    description: string,
}

export const productList: TProduct[] = [
    {
        name: 'Power Infusing Serum',
        image: '/images/products/power-infusing-serum.jpg',
        note: 4.7,
        price: 175,
        new: true,
        exclusive: true,
        description: 'Description du produit',
    },
    {
        name: 'Total Regenerating Cream',
        image: '/images/products/total-regenerating-cream.jpg',
        note: 3,
        price: 120,
        new: false,
        exclusive: false,
        description: 'Description du produit 2',
    },
    {
        name: 'Wrinkle Smoothing Eye Cream',
        image: '/images/products/wrinkle-smoothing-eye-cream.jpg',
        note: 3,
        price: 120,
        new: false,
        exclusive: true,
        description: 'Description du produit 2',
    },
    {
        name: 'Uplifting And Firming Cream Enriched',
        image: '/images/products/uplifting-and-firming-cream-enriched.jpg',
        note: 3,
        price: 120,
        new: true,
        exclusive: false,
        description: 'Description du produit 2',
    },
]
