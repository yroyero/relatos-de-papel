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

    const handleRemoveFromCart = (productId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const handleAddNotification = (message: string) => {
        dispatch({ type: 'ADD_NOTIFICATION', payload: message });
    };

    const handleRemoveNotification = (index: number) => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: index });
    };

    const handleClearNotifications = () => {
        dispatch({ type: 'CLEAR_NOTIFICATIONS' });
    }

    return {
        data,        
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        handleAddNotification,
        handleRemoveNotification,
        handleClearNotifications
    }
}