import { ShopState } from "../@types";

export const shopReducer = (state: ShopState, action: any): ShopState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };        
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            };
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                notifications: state.notifications.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
};