import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import { useLoaderData } from "react-router-dom";
import ShopBanner from "./ShopBanner";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage,setItemsPerPage] = useState(2);
    const [search, setSearch] = useState('');
    const {count} =useLoaderData();
    console.log(count);
    const axios = useAxiosPublic()
    // const itemPerPage =2;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    console.log(numberOfPages);
    const pages = [...Array(numberOfPages).keys()];
    useEffect(() => {
      fetch(`https://bhola-mart-shop-server.vercel.app/productLis?page=${currentPage}&size=${itemsPerPage}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [currentPage,itemsPerPage]);
    const handelePrevPage=()=>{
      if(currentPage > 0){
        setCurrentPage(currentPage - 1);
      }
    }
    const handleNextPsge= ()=>{
      if(currentPage < pages.length - 1){
        setCurrentPage(currentPage + 1);
      }
    }
    const handleItemsPerPage = e => {
      const val = parseInt(e.target.value);
      console.log(val);
      setItemsPerPage(val);
      setCurrentPage(0);
  }
  const handelSearch = e =>{
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log(searchText);
    axios(`productLisSearch?search=${search}`)
  }
    return (
        <div className="mb-10">
     <ShopBanner></ShopBanner>
     <div className="mx-[30%] mb-20 mt-14 flex items-center justify-center">
      <form onSubmit={handelSearch}>
       <input type="text" placeholder="Search" name="search" className="input input-bordered  w-96"/>
       <input type="submit" name="Search" className=" btn" />
      </form>
     </div>
      <div className="grid lg:grid-cols-3 lg:gap-20 xl:grid-cols-4 lg:ml-[10%] xl:gap-24 md:grid-cols-2 md:mx-[10%] sm:grid-cols-1 m-auto sm:mx-[26%]  ">
        {products?.map(product =><ShopCard key={product?._id} product={product}></ShopCard> )}
      </div>
      <div className="mx-auto text-center">
        <p> Current Page : {currentPage}</p>
        <button onClick={handelePrevPage}>Prev</button>
        {
          pages?.map(page =><button className="btn"
            onClick={()=> setCurrentPage(page)} 
            key={page}>
              {page}</button>)
        }
        <button onClick={handleNextPsge}>Next</button>
        <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">1</option>
                    <option value="10">2</option>
                    {/* <option value="20">20</option>
                    <option value="50">50</option> */}
                </select>
      </div>
    </div>
    );
};

export default Shop;