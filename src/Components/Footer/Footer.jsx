import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
    return (
    <div id="footer">
        <div className="lienhe">
            <div className="footertitle">Liên Hệ</div>
            <div className="footerdetail">
                <div>Số đt: ***********</div>
                <div>Tư vấn: ***********</div>
                <div>Email: ***********</div>
                <div>Giờ hoạt động: ***********</div>
            </div>
        </div>
        <div className="chinhsach">
            <div className="footertitle">Chính sách</div>
            <div className="footerdetail">
                <div>Chính sách</div>
                <div>Chính sách</div>
                <div>Chính sách</div>
                <div>Chính sách</div>   
            </div>
        </div>
        <div className="fanpage">
            <div className="footertitle">Fanpage</div>
            <div className="footerdetail">Link Fanpage</div>
        </div>
        <div className="diachi">
            <div className="footertitle">Địa chỉ</div>
            <div className="footerdetail">
                <div>Địa chỉ: ***********</div>
            </div>
        </div>
    </div>             
    )
}
export default Footer;