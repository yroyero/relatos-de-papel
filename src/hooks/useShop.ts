import { useReducer } from "react";
import { shopReducer } from "../reducers/shopReducer";
import { Product, ShopState } from "../@types";

const initialState: ShopState = {
    cart: [],
    notifications: []
};

export const useShopData = () => {    
    const [data, dispatch] = useReducer(shopReducer, initialState);


    const handleAddToCart = (product: Product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const handelRemoveFromCart = (productId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const handleAddNotification = (message: string) => {
        dispatch({ type: 'ADD_NOTIFICATION', payload: message });
    };

    const handleRemoveNotification = (index: number) => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: index });
    };

    return {
        data,        
        handleAddToCart,
        handelRemoveFromCart,
        handleAddNotification,
        handleRemoveNotification
    }
}