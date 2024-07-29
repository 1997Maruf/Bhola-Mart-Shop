import axios from "axios";

const axiosPublic = axios.create({
baseURL: 'https://bhola-mart-shop-server.vercel.app/'
})
const useAxiosPublic = () => {
  
        return axiosPublic;
};

export default useAxiosPublic;
