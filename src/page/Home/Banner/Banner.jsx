import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/img/lll.webp'
import image2 from '../../../assets/img/kk.webp'
import image3 from '../../../assets/img/mm.webp'


const Banner = () => {

    
    return (
        <div className="">
           <Carousel className="pt-9">
                <div >
                    <img src={image1} />
                   
                </div>
                <div>
                    <img src={image2} />
                   
                </div>
                <div>
                    <img src={image3} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;