import React from "react";
import '../Opinion/Opinion.css';

const Opinion = () => {
    return (
    <div class="Ykienkhachhang">
        <div class="tieude">
            <p><sup><sup>__________________________________________________________</sup></sup></p>
            <div class="customtieude"><i class="fa-regular fa-comment"></i> Ý Kiến Khách Hàng</div>
            <p><sup><sup>__________________________________________________________</sup></sup></p>
        </div>
        <div class="comments">
            <ul>
                <li>
                    <div class="avatar"></div>
                    <div class="username">Username</div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="comment"></div>
                </li>
                <li>
                    <div class="avatar"></div>
                    <div class="username">Username</div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="comment"></div>
                </li>
                <li>
                    <div class="avatar"></div>
                    <div class="username">Username</div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="comment"></div>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default Opinion;