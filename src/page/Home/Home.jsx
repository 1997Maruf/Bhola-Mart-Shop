import Banner from "./Banner/Banner";
import PopularCategories from "./PopularCategories/PopularCategories";
import Reviews from "./Reviews/Reviews";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularCategories></PopularCategories>
           <TopSellingProduct></TopSellingProduct>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;