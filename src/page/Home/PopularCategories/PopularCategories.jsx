import { GiSocks } from "react-icons/gi";
import { FaStudiovinari } from "react-icons/fa";
import { FaWineBottle } from "react-icons/fa6";
import { GiPuzzle } from "react-icons/gi";
import { GrVirtualMachine } from "react-icons/gr";
import { FaPersonDress } from "react-icons/fa6";

const PopularCategories = () => {
    return (
        <div className="m-auto mx-28 mb-10">
            <h2 className="text-4xl text-center text-lime-900 font-bold">Popular categories</h2>
            <div className="grid lg:grid-cols-6 sm:grid-cols-1 mt-10 lg:ml-24">
                <div className="sm:mt-10  rounded-full	 p-8">
                <GiSocks className="w-10 h-10 hover:text-lime-800 text-slate-600 m-auto" />
                <p className="text-xl hover:text-lime-800  text-slate-600 text-center font-semibolds mt-5">Socks</p>
                </div>
                <div className="sm:mt-10  rounded-full	p-8">
                <FaStudiovinari className="w-10 hover:text-lime-800  h-10 text-slate-600 m-auto"/>
                  <p className="text-xl hover:text-lime-800  text-slate-600 text-center font-semibolds mt-5">Stuffies</p>
                </div>
                <div className="sm:mt-10  rounded-full	p-8">
                <FaWineBottle className="w-10 hover:text-lime-800  h-10 text-slate-600 m-auto"/>
                  <p className="text-xl hover:text-lime-800  text-slate-600 text-center font-semibolds mt-5">Hot Sauce</p>
                </div>
                <div className="sm:mt-10  rounded-full	p-8">
                <GiPuzzle className="w-10 hover:text-lime-800  h-10 text-slate-600 m-auto"/>
                  <p className="text-xl hover:text-lime-800  text-slate-600 text-center font-semibolds mt-5">Puzzles</p>
                </div>
                <div className="sm:mt-10  rounded-full	p-8">
                <GrVirtualMachine className="w-10 hover:text-lime-800  h-10 text-slate-600 m-auto"/>
                 <p className="text-xl text-slate-600 text-center font-semibolds hover:text-lime-800  mt-5">Greeting Cards</p>
                </div>
                <div className="sm:mt-10  rounded-full	p-8">
                <FaPersonDress className="w-10 hover:text-lime-800  h-10 text-slate-600 m-auto"/>
                  <p className="text-xl hover:text-lime-800  text-slate-600 text-center font-semibolds mt-5">Houseware</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;