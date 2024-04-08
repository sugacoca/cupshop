import React, { useContext } from "react";
import '../CartItems/CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from "react-router-dom";

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Size</p>
                <p>ColorType</p>
                <p>Number</p>
                <p>Color</p>
                <p>Topping</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    const { selectedSize } = cartItems[e.id];

                    return (
                    <div>
                        <div className="cartitems-format cartitems-format-mains">
                            <img src={e.image} alt="" className="carticon-product-icon"/>
                            <p>{e.name}</p>
                            <p>{selectedSize || "sizeS"}</p>
                            <p>Plain</p>
                            <p>2 lần</p>
                            <p>Red</p>
                            <p>Star</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                    )
                }else {
                    // Return an empty element (or customize based on your needs)
                    return <div></div>;
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <Link to='/checkout'><button>PROCEED TO CHECKOUT</button></Link>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CartItems;