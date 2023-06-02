import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
  // const {user} = useContext(AuthContext)
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email && !! localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;

// queryFn: async()=>{
//    const res= await fetch(`http://localhost:5000/carts?email=${user?.email}`)
//    return res.json()
// },
