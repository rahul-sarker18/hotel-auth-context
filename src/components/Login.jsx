import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Usercontext";

const Login = () => {
  const {loginFun,googlesignup} =useContext(Authcontext)
const navegate =useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/'

// const location = useLocation(); 
//     const from = location.state?.from?.pathname || '/'


  const handellogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log( email, password);
    loginFun(email ,password)
    .then(result => {
      const user =result.user;
      form.reset()
      navegate(from , {replace:true})
    })
    .catch(error => console.error(error))
  };


  // google handelclick func
  const googlehandelclick =()=>{
    console.log('hello');
    googlesignup()
    .then(res =>{
      const user =res.user;
      console.log(user);
      navegate(from , {replace:true})
    })
    .catch(error=> console.error(error))
  }




  return (
    <div className=" w-2/5 mx-auto mt-16">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
         onSubmit={handellogin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link rel="noopener noreferrer">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 text-2xl rounded-sm border-none btn btn-outline btn-primary">
           <FaGithub/>
          </button>
          <button onClick={googlehandelclick} aria-label="Log in with Twitter" className="p-3 text-2xl rounded-sm btn btn-outline btn-accent border-none ">
           <FaGoogle/>
          </button>
          <button aria-label="Log in with GitHub" className="p-3 text-2xl rounded-sm btn btn-outline btn-primary  border-none ">
            <FaFacebook/>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/signup"
            className="underline dark:text-gray-100"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
