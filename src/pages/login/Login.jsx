import { Link, useLocation, useNavigate } from "react-router-dom";
import "../login/login.css";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase.config";
import Pagetitle from "../../components/Pagetitle";
import axios from "axios";



const Login = () => {

 const {googleLogin, signIn}= useAuth()
 const auth = getAuth(app);
 const location = useLocation();
 const navigate = useNavigate();
 console.log("location in login", location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const{email, password} = data;
    console.log(data)
    // 1
    const user = {email}
    

    signIn(email, password)
  // 1
  axios.post( 'https://server-site-one-xi.vercel.app/jwt' ,user, {withCredentials: true})
    .then(res=>{
        if(res.data.success){
          swal({text:'success login',  icon: "success",})
            console.log(res.user)
            navigate(location?.state ? location.state : "/");
        }
        // console.log('token response',res.data)
    })


    // .then(result=>{
    //   swal({text:'success login',  icon: "success",})
    //   console.log(result.user)
    // })
    .catch((error)=>{
      swal({text:'error ', icon:'error'})
      console.error(error)
    })
  
  };

  const handleSocialLogin = (socialProvider)=>{
    socialProvider()

    // 1 
    .then((result) => {
      if (result.user) {
        // Social authentication successful
        const user = { email: result.user.email };

        // Make the axios post request
        axios
          .post("https://server-site-one-xi.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              swal({ text: "Success login", icon: "success" });
              console.log(res.user);
              navigate(location?.state ? location.state : "/");
            }
          })
          .catch((error) => {
            swal({ text: "Error", icon: "error" });
            console.error(error);
          });
        }
      })
    // axios.post( 'https://server-site-one-xi.vercel.app/jwt' ,user, {withCredentials: true})
    // .then(res=>{
    //     if(res.data.success){
    //       swal({text:'success login',  icon: "success",})
    //         console.log(res.user)
    //         navigate(location?.state ? location.state : "/");
    //     }
    //     // console.log('token response',res.data)
    // })

    // .then((result) => {
    //   if (result.user) {
    //     swal({
    //       text: "Success fully login",
    //       icon: "success",
    //     });
    //     navigate(location?.state ? location.state : "/");
    //   }
    // })
    .catch((error) => {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
      console.error(error);
      // setError(error.message)
    });
  }

  return (
    <div className="pattern">
        <Pagetitle title='Login'></Pagetitle>
      <div className="flex flex-col items-center py-6 lg:h-[37rem] lg:flex-row mx-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
           Nourish hub
          </h2>

          <h3 className="mt-2 text-2xl font-semibold text-gray-100">
            Hello <span className="text-yellow-400">Guest</span>
          </h3>

          <p className="mt-4 text-gray-100">
          Welcome to our premier hotel booking service, where your comfort and satisfaction are our top priorities.Whether you're planning a business trip, a family vacation, or a romantic getaway, we offer a wide range of accommodations to suit every traveler's needs.
          </p>
        </div>

        <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
          <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
            <div className="px-6 py-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                Sign In
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} action="#">
                <div className="mt-4">
                  <input
                    className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-opacity-40 focus:ring-yellow-300 focus:outline-none focus:ring"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    {...register("email", { required: true })}
                  />
                  <input
                    className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-opacity-40 focus:ring-yellow-300 focus:outline-none focus:ring"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    {...register("password", { required: true })}
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                  >
                    Forget Password?
                  </a>

                  <button className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-yellow-600 rounded-md hover:bg-yellow-400 dark:hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 dark:focus:bg-yellow-300">
                    Sign In
                  </button>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                  <a
                    href="#"
                    class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  >
                    or login with Social Media
                  </a>

                  <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div class="flex items-center mt-6 mb-5 -mx-2">
                  <button onClick={() => handleSocialLogin(googleLogin)}
                    type="button"
                    class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-yellow-600 rounded-lg hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none"
                  >
                    <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                    </svg>

                    <span class="hidden mx-2 sm:inline">
                      Sign in with Google
                    </span>
                  </button>

                  {/* <a onClick={() => handleSocialLogin(githubLogin)}
                    href="#"
                    class="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-300"
                  >
                   <FaGithub />
                  </a> */}
                </div>

                <div className="">
                  <p className="text-xs text-center sm:px-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="underline text-gray-900"
                      >
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
