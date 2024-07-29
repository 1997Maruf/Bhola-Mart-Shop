
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import imag1 from '../../assets/img/8.jpg'
import imag3 from '../../assets/img/9.jpg'
import imag4 from '../../assets/img/10.jpg'
import imag5 from '../../assets/img/11.jpg'
import imag6 from '../../assets/img/12.jpg'
import imag7 from "../../assets/img/13.png"


const ShopBanner = () => {
   
    
    return (
        <Carousel className="pt-10">
                <div>
                    <img src={imag1} />
                </div>
                <div>
                    <img src={imag3} />
                   
                </div>
                <div>
                    <img src={imag4} />
                    
                </div>
                <div>
                    <img src={imag5} />
                    
                </div>
                <div className='flex'>
                    <img src={imag6} />
                </div>
                <div className='flex'>
                    <img src={imag7} />
                </div>
            </Carousel>
    );
};

export default ShopBanner;