import { useContext, useEffect,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fromImg from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";



const Login = () => {
    const { signIn} = useContext(AuthContext)
    const [disabled,setDisabled] = useState(true)
    const location = useLocation();
    const navigate = useNavigate()

    
    let from = location.state?.from?.pathname || "/";

    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])  


    const handleSubmitBtn =(event)=>{
        event.preventDefault()
        const form = event.target;
       
        const email = form.email.value
        const password = form.password.value
        console.log(email ,password)
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
        .catch(error =>{
            console.log(error)
        })
        
    }
    const hadnleValiDateCaptcha =(event)=>{
        const user_captcha_value = event.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col md:flex-row-reverse">
        

        <div className="card md:w-1/2 max-w-sm mx-7 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmitBtn} className="card-body">


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>


                <div onBlur={hadnleValiDateCaptcha} className="form-control">
                    <label className="label">
                    < LoadCanvasTemplate />
                    </label>
                    <input type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                </div>
               




                <div className="form-control mt-6">
                    <input disabled={false}  className="btn btn-primary" type="submit" value="Login" />
                </div>


            </form>
            <SocialLogin></SocialLogin>
            <p><small>New Here? <Link to="/signup">Create an account <span className="text-green-600">register here</span></Link> </small></p>
        </div>
        <div className="text-center md:w-1/2 lg:text-center">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
           <img src={fromImg} alt="" />
        </div>
    </div>
   
</div>

  );
};

export default Login;
