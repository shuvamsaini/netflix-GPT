import { useState } from "react";
import Header from "./Header";
import "./Login.css";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="image flex flex-col justify-center items-center">
        <form className="rounded-md h-[470px] w-[450px] flex flex-col justify-center items-center login gap-6">
          <h1 className="text-white font-calibri font-bold text-3xl w-[100%] pl-20">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="pr-32 pl-4 py-4 rounded-sm bg-[white] placeholder:text-black text-black"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="pr-32 pl-4 py-4 rounded-sm bg-[white] placeholder:text-black  text-black"
          />

         
          <input
            type="password"
            placeholder="Password"
            className="pr-32 pl-4 py-4 rounded-sm bg-[white] placeholder:text-black text-black"
          />
          <button className="px-32 py-4 bg-[#e50914] text-white text-[18px] rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignInForm}
            className="cursor-pointer sign up text-white font-calibri w-[100%] ml-36"
          >
            {isSignInForm
              ? "New to Netflix ? Sign Up now."
              : "Already registered ? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;