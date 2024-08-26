import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart";

export const CartContext = createContext()

function useCartReducer() {
    const [state, dispach] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispach({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispach({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispach({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
