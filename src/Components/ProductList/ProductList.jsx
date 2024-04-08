import {React} from "react";
import { Link } from "react-router-dom";
import '../ProductList/ProductList.css';
import quaitho from '../Assets/quaitho.jpg';
import quaibup from '../Assets/quaibup.jpg';

const ProductList = () => {
    return (
    <div className="Danhmucsanpham" id="Products">
        <div className="tieude">
            <p><sup><sup>______________________________________________________</sup></sup></p>
            <div class="customtieude"><i class="fa-solid fa-cart-shopping"></i> Danh Mục Sản Phẩm</div>
            <p><sup><sup>______________________________________________________</sup></sup></p>
        </div>
        <div className="hinhanhsanpham">
            <ul>
                <li>
                    <a href="">
                        <Link to='/quaitho'><img src={quaitho} alt=""/></Link>
                        Quai Thỏ
                    </a>
                </li>
                <li>
                    <a href="">
                        <Link to='/quaibup'><img src={quaibup} alt=""/></Link>
                        Quai Búp
                    </a>
                </li>          
            </ul>
        </div>
    </div>
    )
}
export default ProductList;