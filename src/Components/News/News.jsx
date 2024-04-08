import React from "react";
import banner1 from '../Assets/banner1.png';
import banner2 from '../Assets/banner2.png';
import banner3 from '../Assets/banner3.png';
import banner4 from '../Assets/banner4.png';
import banner5 from '../Assets/banner5.png';
import '../News/News.css';

const News = () => {
    return (
    <div className="container">
        <div className="news">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                  <li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>
              

                <div className="carousel-inner">
                  <div id="banner" className="item active">
                    <img src={banner1} alt="Los Angeles" />
                  </div>
              
                  <div id="banner" className="item">
                    <img src={banner2} alt="Chicago" />
                  </div>
              
                  <div id="banner" className="item">
                    <img src={banner3} alt="New York" />
                  </div>

                  <div id="banner" className="item">
                    <img src={banner4} alt="New York" />
                  </div>

                  <div id="banner" className="item">
                    <img src={banner5} alt="New York" />
                  </div>
                </div>
              

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
    )
}
export default News;