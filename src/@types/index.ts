//título, autor, género o palabras clave, con la opción de filtrar resultados según
//diversos criterios como precio, popularidad o fecha de lanzamiento. 
export interface Product {
    id: number;
    title: string;
    author: string;
    genre: string;
    price: number;
    summary: string;
    rating: number;
    releaseDate: Date;
    tags: string[];
    imageUrl: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface ShopState {
    cart: CartItem[];
    notifications: string[];
}

export interface FeaturedProductsProps {
    books: Product[];
    title?: string;
}


export interface ReviewProps {
    author: string;
    content: string;
    date: string;
    rating: number;
}

export interface Shipping {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string
}

export interface PaymentData {
    name: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}