import { useQuery } from "@tanstack/react-query";
import { BsTrash } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
      const res = await axiosSecure.get('/users')
      return res.data;
  });
  const handleDeleteBtn =(user)=>{
    fetch(`http://localhost:5000/users/${user._id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if (data.deletedCount>0) {
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} has been delete from admin`,
          showConfirmButton: false,
          timer: 1500
        })
        
      }
   
    })
  
  }

  const handleMakieAdmiBtn=(user)=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
      method:"PATCH"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.modifiedCount >0 ) {
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  return (
    <div className="w-full h-full">
      <h2 className="text-3xl text-center uppercase">
        {" "}
        all user {users.length}
      </h2>

      <div className="w-full my-5">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="my-2">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <th>{index +1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
            
            {
                user.role === "admin"? "admin":
                <button onClick={()=> handleMakieAdmiBtn(user)} className="btn bg-orange-600 btn-sm"><FaUserShield></FaUserShield></button>
            }
</td>

                <td>

                <button onClick={()=> handleDeleteBtn(user)} className="btn bg-red-600 btn-sm"><BsTrash></BsTrash></button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
