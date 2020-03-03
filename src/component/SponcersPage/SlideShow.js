import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className='main-slider' infiniteLoop={true} autoPlay={true}
            stopOnHover={true}>
                {this.props.sponsors.map((s,i) =>(
                    <div>
                        <img className='main-slider-img' src={s.img} />
                        <p className="legend"> {s.name}</p>
                    </div>
                ))}
                
                
            </Carousel>
        );
    }
}
export default DemoCarousel