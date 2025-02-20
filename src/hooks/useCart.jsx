import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxiosSecure(); // axiosSecure hooks ke niye asa holo
    const {user} = useAuth(); // every user wise show cart in the ui

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email], // user onujayi cart show korbe tai query key te user.email diye user k set kora holo
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart ,refetch] // refetch ke pathanor jonnoi array akare reture kora hoyeche etai reason
   
};

export default useCart;