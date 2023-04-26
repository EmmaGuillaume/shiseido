export type TProduct = {
    name: string,
    image: string,
    note: number,
    price: number,
    new: boolean,
    exlusive: boolean,
    description: string,
}

export const productList: TProduct[] = [
    {
        name: 'Nom du produit',
        image: '/images/products/pshit1.jpg',
        note: 4.5,
        price: 175,
        new: true,
        exlusive: true,
        description: 'Description du produit',
    },
    {
        name: 'Nom du produit 2',
        image: '/images/products/pshit1.jpg',
        note: 3,
        price: 120,
        new: false,
        exlusive: false,
        description: 'Description du produit 2',
    }
]
