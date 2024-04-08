import React, { useContext } from 'react';
import '../Navbar/Navbar.css';
import logo from '../Assets/logo.svg';
import search from '../Assets/search.svg';
import user from '../Assets/user.svg';
import cart from '../Assets/cart.svg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext);
    

    return (
        <div className="container" id='Home'>
            <div className="category">
                <div className="row">
                    <div className="col-lg-1">
                        <div className="logo">
                            <a href="">
                                <Link to='/'><img src={logo} width={'90px'} height={'46px'} alt="" /></Link>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="_detail_category">
                            <ul className="nav navbar-nav" >
                                <Link id='home' style={{textDecoration: 'none',}} to='/'><li className="child_li"><a href="#Home"  className="smooth-scroll">Home</a></li></Link>
                                <li className="child_li"><a href="#AboutUs" className="smooth-scroll">About Us</a></li>
                                <li className="child_li"><a href="#Products" className="smooth-scroll">Products</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="_icon_contact">
                            <div className="icon">
                                <img src={search} width={'30px'} height={'30px'} alt="" />
                            </div>
                            <div className="icon">
                                <img src={user} width={'30px'} height={'30px'} alt="" />
                            </div>
                            <div className="icon cart">
                                <Link to='./cart'>
                                    <img src={cart} width={'30px'} height={'30px'} alt="" />
                                </Link> 
                                <div className="nav-cart-count">{getTotalCartItems()}</div>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;