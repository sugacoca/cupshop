import React from "react";
import '../Selection/Selection.css';

const Selection = () => {
    return (
        <div className="container">
         <div class="stepbystep">
            <div class="introstep">
                <div class="intro">
                    <p>Giới Thiệu</p>
                </div>
                <div class="step">
                    <p>Bước 1: chọn kích thước</p>
                </div>
                <div class="step">
                    <p>Bước 2: Chọn kiểu màu</p>
                </div>
                <div class="step">
                    <p>Bước 3: Chọn số lần màu</p>
                </div>
                <div class="step">
                    <p>Bước 4: Chọn màu</p>
                </div>
                <div class="step">
                    <p>Bước 5: Chọn phụ kiện</p>
                </div>
            </div>

            <div class="imgstep">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                      <li data-target="#myCarousel" data-slide-to="3"></li>
                      <li data-target="#myCarousel" data-slide-to="4"></li>
                    </ol>

                    <div class="carousel-inner">
                      <div class="item active">
                        <img src="./cachdatquai.png"  alt="Los Angeles"/>
                      </div>
                  
                      <div class="item">
                        <img src="./img_mountains_wide.jpg" alt="Chicago"/>
                      </div>
                  
                      <div class="item">
                        <img src="./img_mountains_wide.jpg" alt="New York"/>
                      </div>
                      <div class="item">
                        <img src="./img_mountains_wide.jpg" alt="New York"/>
                      </div>

                      <div class="item">
                        <img src="./img_mountains_wide.jpg" alt="New York"/>
                      </div>
                    </div>
                  
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </div>
         </div>
        </div>
    )
}
export default Selection;