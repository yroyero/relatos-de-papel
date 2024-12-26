import { createContext, useContext, ReactNode } from 'react';
import { Product, ShopState } from '../@types';
import { useShopData } from '../hooks/useShop';


interface ShopContextProps extends ShopState {
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    addNotification: (message: string) => void;
    removeNotification: (index: number) => void;
    clearNotifications: () => void;
}

const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const {data, handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        handleAddNotification,
        handleRemoveNotification,
        handleClearNotifications} = useShopData();

    const addToCart = (product: Product) => {
        handleAddToCart(product);
    };

    const removeFromCart = (productId: number) => {
       handleRemoveFromCart(productId);
    };

    const clearCart = () => {
        handleClearCart();
    }

    const addNotification = (message: string) => {
       handleAddNotification(message);
    };

    const removeNotification = (index: number) => {
        handleRemoveNotification(index);
    };

    const clearNotifications = () => {
        handleClearNotifications();
    }

    return (
        <ShopContext.Provider
            value={{
                cart: data.cart,
                notifications: data.notifications,
                addToCart,
                removeFromCart,
                clearCart,
                addNotification,
                removeNotification,
                clearNotifications
            }}
        >            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};