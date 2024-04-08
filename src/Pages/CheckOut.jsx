import React, { useContext } from "react";
import './CSS/CheckOut.css';
import { ShopContext } from "../Context/ShopContext";

const CheckOut = () => {
    const {all_product, cartItems} = useContext(ShopContext);
    return (
        <div className="container">
            <div class="title">
                  Checkout
            </div>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Size</p>
                <p>ColorType</p>
                <p>Number</p>
                <p>Color</p>
                <p>Topping</p>
                <p>Quantity</p>
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
                        </div>
                        <hr />
                    </div>
                    )
                }else {
                    // Return an empty element (or customize based on your needs)
                    return <div></div>;
                }
            })}
            <div class="dot">
                <div class="dottext">
                        ......................................................................
                </div>
            </div>    
            <div class="godown">
                 <a href="#thongtin"><i class="fa-solid fa-circle-down custom"></i></a>
                 <div>Lướt xuống thông tin đặt hàng</div>
            </div>
            <div className="buy">
                <div className="infor" id="thongtin">
                  <form>
                    <label for="name">Họ tên</label>
                    <input type="text" id="name" name="name" required/>

                    <label for="number">Số điện thoại:</label>
                    <input type="text" id="number" name="number" required/>
                  
                    <label for="district">Quận/Huyện</label>
                    <input type="text" id="district" name="district" required/>
                  
                    <label for="ward">Phường/Xã</label>
                    <input type="text" id="ward" name="ward" required/>                 
                  </form>
                  <form action="">
                    <label for="address">Địa chỉ</label>
                    <input type="text" id="address" name="address" required/>
                  
                    <label for="house_number">Số nhà</label>
                    <input type="text" id="house_number" name="house_number" required/>
                  
                    <label for="city">Thành phố/Tỉnh</label>
                    <input type="text" id="city" name="city" required/>
                  
                    <label for="payment_method">Phương thức thanh toán</label>
                    <input type="text" id="payment_method" name="payment_method" required/>
                  </form>
                </div>
                <div class="dathang">
                  <div class="hinhthuc">
                    Hướng dẫn thanh toán hình thức chuyển khoản
                  </div>
                  <div class="checkbutton">
                    <button>Đặt hàng</button>
                  </div>
                </div>
            </div>        
        </div>
    )
}
export default CheckOut;