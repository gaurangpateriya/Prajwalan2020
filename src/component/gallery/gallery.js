import React, { Component } from "react";
import Slider from "react-slick";
import './gallery.css'
var listOfImages =[];
export default class Gallery extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
    }
 
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="main_slider">
        {
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info" className="image"></img>
                    )
              }
        </Slider>
      </div>
    );
  }
}