export type TProduct = {
    id: number,
    name: string,
    image: string,
    note: 1 | 2 | 3 | 4 | 5,
    price: string,
    new: boolean,
    exclusive: boolean,
    description: string,
}

export const productList: TProduct[] = [
    {
        id:1,
        name: 'Power Infusing Serum',
        image: '/images/products/power-infusing-serum.jpg',
        note: 4,
        price: '140.00',
        new: true,
        exclusive: true,
        description: 'Description du produit',
    },
    {
        id:2,
        name: 'Total Regenerating Cream',
        image: '/images/products/total-regenerating-cream.jpg',
        note: 5,
        price: '290.00',
        new: false,
        exclusive: false,
        description: 'Description du produit 2',
    },
    {
        id:3,
        name: 'Wrinkle Smoothing Eye Cream',
        image: '/images/products/wrinkle-smoothing-eye-cream.jpg',
        note: 3,
        price: '64.00',
        new: false,
        exclusive: true,
        description: 'Description du produit 2',
    },
    {
        id:4,
        name: 'Uplifting And Firming Cream Enriched',
        image: '/images/products/uplifting-and-firming-cream-enriched.jpg',
        note: 2,
        price: '140.00',
        new: true,
        exclusive: false,
        description: 'Description du produit 2',
    },
]
