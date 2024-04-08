import React, { useContext } from "react";
import '../ProductDisplay/ProductDisplay.css';
import { ShopContext } from "../../Context/ShopContext";
import sizeS from '../Assets/sizeS.png';
import sizeM from '../Assets/sizeM.png';
import sizeL from '../Assets/sizeL.png';
import tron from '../Assets/tron.png';
import half from '../Assets/half.png';
import cuonbien from '../Assets/cuonbien.png';
import sole from '../Assets/sole.png';
import mau2 from '../Assets/2mau.png';
import mau3 from '../Assets/3mau.png';
import mau4 from '../Assets/4mau.png';
import star from '../Assets/star.png';
import traitim from '../Assets/traitim.png';
import bonghoa from '../Assets/bonghoa.png';
import { Link } from 'react-router-dom';


const ProductDisplay = (props) => {
      const {product} = props;
      const {addToCart} = useContext(ShopContext);

    return (
        <div className="container">
            <div class="step1">
                <div class="aboutstep">Bước 1: Chọn kích thước</div>
                <ul>
                    <li>
                        <div class="img">
                            <img src={sizeS} alt=""/>
                        </div>
                        <div><input type="radio" name="size" value="sizeS"/>Size S</div>
                    </li>
                    <li>
                        <div class="img">
                            <img src={sizeM} alt=""/>
                        </div>
                        <div><input type="radio" name="size" value="sizeM"/>Size M</div>
                    </li>
                    <li>
                        <div class="img">
                            <img src={sizeL} alt=""/>
                        </div>
                        <div><input type="radio" name="size" value="sizeL"/>Size L</div>
                    </li>
                </ul>
            </div>
            <div class="step1">
                <div class="aboutstep">Bước 2: Chọn kiểu màu</div>
                <ul>
                    <li>
                        <div class="img">
                            <img id="colortypes" src={tron} alt=""/>
                        </div>
                        <div><input type="radio" name="colortypes" value="tron"/>Trơn</div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="colortypes" src={half} alt=""/>
                        </div>
                        <div><input type="radio" name="colortypes" value="half"/>Half</div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="colortypes" src={cuonbien} alt=""/>
                        </div>
                        <div><input type="radio" name="colortypes" value="cuonbien"/>Cuộn biển</div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="colortypes" src={sole} alt=""/>
                        </div>
                        <div><input type="radio" name="colortypes" value="sole"/>Sole</div>
                    </li>
                </ul>
            </div>
            <div class="step1">
                <div class="aboutstep">Bước 3: Chọn số lần màu</div>
                <ul>
                    <li>
                        <div class="img">
                            <img id="colorcounts" src={mau2} alt=""/>
                        </div>
                        <div><input type="radio" name="colorcounts" value="2lan"/>2 lần màu </div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="colorcounts" src={mau3} alt=""/>
                        </div>
                        <div><input type="radio" name="colorcounts" value="3lan"/>3 lần màu </div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="colorcounts" src={mau4} alt=""/>
                        </div>
                        <div><input type="radio" name="colorcounts"  value="4lan"/>4 lần màu </div>
                    </li>
                </ul>
            </div>
            <div class="step1">
                <div class="aboutstep">Step 4: choose color</div>
                <ul>
                    <li>
                        <div id="red" class="img"></div>
                        <div><input type="radio" name="color"  value="red"/>Đỏ</div>
                    </li>
                    <li>
                        <div id="blue" class="img"></div>
                        <div><input type="radio" name="color"  value="blue"/>Xanh biển</div>
                    </li>
                    <li>
                        <div id="green" class="img"></div>
                        <div><input type="radio" name="color"  value="green"/>Xanh lá</div>
                    </li>
                </ul>
            </div>
            <div class="step1">
                <div class="aboutstep">Bước 5: Chọn Phụ Kiện</div>
                <ul>
                    <li>
                        <div class="img">
                            <img id="topping" src={star} alt=""/>
                        </div>
                        <div><input type="radio" name="topping" value="star"/>Ngôi sao</div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="topping" src={traitim} alt=""/>
                        </div>
                        <div><input type="radio" name="topping" value="heart"/>Trái tim</div>
                    </li>
                    <li>
                        <div class="img">
                            <img id="topping" src={bonghoa} alt=""/>
                        </div>
                        <div><input type="radio" name="topping" value="flower"/>Bông Hoa</div>
                    </li>
                </ul>
            </div>
            <div className="button">
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>    
                <Link to='/checkout'><button id="checkoutbutton">CheckOut</button></Link>   
            </div>
        </div>
    )
}

export default ProductDisplay;