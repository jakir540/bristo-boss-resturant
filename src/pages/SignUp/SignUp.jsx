import { Link, useNavigate } from "react-router-dom";
import fromImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, logOut } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //onsubmit function create user
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        console.log(loggedUser);

        updateUser(data.name, data.photoURL)
        const saveUser = { name: data.name, email: data.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        Swal.fire({
          title: "create user Successfull",
          showClass: {
            popup: "create user Successfull ",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="card md:w-1/2 max-w-sm mx-7 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  pattern: /^[A-Z]+$/i,
                })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p>first name is must a capital letter required</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            {errors.email && <span>Email must be be required</span>}

            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="PhotURL"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
           
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p>
            <small>
              Already have an account?{" "}
              <Link to="/login">
                login <span className="text-green-600">login here</span>
              </Link>{" "}
            </small>
          </p>
        </div>
        <div className="text-center md:w-1/2 lg:text-center">
          <h1 className="text-5xl font-bold mb-5">Register Now!</h1>
          <img src={fromImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
