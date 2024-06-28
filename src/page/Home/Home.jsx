import Banner from "./Banner/Banner";
import PopularCategories from "./PopularCategories/PopularCategories";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularCategories></PopularCategories>
           <TopSellingProduct></TopSellingProduct>
        </div>
    );
};

export default Home;