export interface product {
  id: 4,
    title: string,
    price: number,
    description: string,
    category: {
      id: number,
      name: string,
      image: string,
      updatedAt: string
    },
    images: string[]
    updatedAt: string
}
