import React from "react";
import '../AboutUs/AboutUs.css';
import cuonthuoc from '../Assets/cuocthuoc.png';

const AboutUs = () => {
    return (
    <div className="container">
        <div className="box">
            <div className="box-left">
                <div className="img">
                    <img src={cuonthuoc} alt="" />
                </div>
            </div>
            <div className="box-right" id="AboutUs">
                <div className="intro">
                    <div>About Us</div>
                    <p>Cuộn Thước là tiệm nhỏ bán quai len với tiêu chí giúp bạn có một chiếc quai xinh độc nhất, không đại trà, không công nghiệp. Tất cả sản phẩm đều được móc thủ công theo thiết kế và ý tưởng của bạn, chiếc quai len không chỉ ghi đậm cá tính của bạn như một phụ kiện mà còn là bạn đồng hành tiện lợi trên hành trình bền vững của bạn.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AboutUs;