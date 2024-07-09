import { BaseType, ParentType } from "./base";

export type ProductRating = {
    rate: number;
    count: number;
}

export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
    parentType?: ParentType;
}

export type ProductProps = {
    productProp: Product;
    parentType: ParentType;
}

export type ProductsState = {
    products: Product[];
    filterProducts?: Product[];
}

export type ProductsActions = BaseType & {
    payload: Product[] | Product | string
}