import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { CartItem, Product, ShopState } from '../@types';
import { useShopData } from '../hooks/useShop';


interface ShopContextProps extends ShopState {
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    addNotification: (message: string) => void;
    removeNotification: (index: number) => void;
}

const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = React.useState<CartItem[]>([]);
    const {data, handleAddToCart,
        handelRemoveFromCart,
        handleAddNotification,
        handleRemoveNotification} = useShopData();

    useEffect(() => {
        setCart(data.cart);
    }, [data.cart]);

    const addToCart = (product: Product) => {
        handleAddToCart(product);
    };

    const removeFromCart = (productId: number) => {
       handelRemoveFromCart(productId);
    };

    const addNotification = (message: string) => {
       handleAddNotification(message);
    };

    const removeNotification = (index: number) => {
        handleRemoveNotification(index);
    };

    return (
        <ShopContext.Provider
            value={{
                cart: data.cart,
                notifications: data.notifications,
                addToCart,
                removeFromCart,
                addNotification,
                removeNotification
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