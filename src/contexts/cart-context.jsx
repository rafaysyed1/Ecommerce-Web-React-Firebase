import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // Find out if cartItem has productToAdd
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((CartItem) =>
            CartItem.id === productToAdd.id
                ? { ...CartItem, quantity: CartItem.quantity + 1 }
                : CartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeItemfromCart = (cartItems, CartItemToRemove) => {
    // Find out if cartItem has productToAdd
    const existingCartItem = cartItems.find((CartItem) => CartItem.id == CartItemToRemove.id);
    if (existingCartItem.quantity == 1) {
        return cartItems.filter((cartItem) => cartItem.id != CartItemToRemove.id)
    }
    if (existingCartItem) {
        return cartItems.map((CartItem) =>
            CartItem.id == CartItemToRemove.id
                ? { ...CartItem, quantity: CartItem.quantity - 1 }
                : CartItem
        );
    }

}
const clearCartItem = (cartItems, CartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id != CartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeCartItem: () => { },
    clearCartItem: () => { },
    cartItemCount: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    useEffect(() => {
        const newCartItemCount = cartItems.reduce((total, CartItem) => total + CartItem.quantity, 0);

        setCartItemCount(newCartItemCount)
    }, [cartItems])
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, CartItem) => total + CartItem.quantity*CartItem.price, 0);

        setCartTotal(newCartTotal)
    }, [cartItems])
    const addItemtoCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeCartItem = (CartItemToRemove) => {
        setCartItems(removeItemfromCart(cartItems, CartItemToRemove))
    }
    const clearItemFromCart = (CartItemToClear) => {
        setCartItems(clearCartItem(cartItems, CartItemToClear))
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemtoCart,
        removeCartItem,
        cartItems,
        cartItemCount,
        cartTotal,
        clearItemFromCart

    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}