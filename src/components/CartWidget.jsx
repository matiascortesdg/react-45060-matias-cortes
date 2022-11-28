import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext)
    return (
        <div className="cartWidget">
            <span className="material-symbols-outlined icon">
            shopping_cart
            </span>
            <span>{totalUnidades() !== 0 && totalUnidades()}</span>
        </div>
    );

};
export default CartWidget;
