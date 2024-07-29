import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";


const UseRole = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {data:role, isLoading} = useQuery({
        queryKey: ['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () =>{
            const {data} = await axiosPublic(`/users/${user.email}`)
            console.log(data.role)
            return data.role;
        }
    })
    return [role,isLoading];
};


export default UseRole;