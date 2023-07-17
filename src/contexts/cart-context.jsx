import { createContext,useState,useEffect } from "react";

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
  
export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems : [],
    addItemToCart : ()=>{},
    cartItemCount : 0
})

export const CartProvider = ({children})=>{
    const [isCartOpen,setIsCartOpen]= useState(false)
    const [cartItems,setCartItems] = useState ([])
    const [cartItemCount,setCartItemCount]= useState(0)
    useEffect(()=>{
        const newCartItemCount = cartItems.reduce((total, CartItem) => total + CartItem.quantity, 0);
        setCartItemCount(newCartItemCount)
    },[cartItems])
    const addItemtoCart  = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }   
    const value = {isCartOpen,setIsCartOpen,addItemtoCart,cartItems,cartItemCount}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}