import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallLoader from "../../Components/Loader/SmallLoader";
import { AuthContext } from "../../contexts/AuthProvider";
// import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, googleSignIn, resetPassword, loading, setLoading } =
    useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  //   const [loginUserEmail, setLoginUserEmail] = useState("");
  //   const [token] = useToken(loginUserEmail);

  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        setLoading(false);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleResetPassword = () => {
    const userEmail = getValues("email");
    resetPassword(userEmail)
      .then(() => toast.success("Send Email for Reset. Please Check it."))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <section>
        <div className="lg:relative">
          <img
            src="https://st2.depositphotos.com/3944627/8072/i/450/depositphotos_80729078-stock-photo-a-pile-of-books-on.jpg"
            className="absolute inset-0 object-cover w-full h-full lg:block hidden"
            alt=""
          />
          <div className="lg:relative bg-gray-300 lg:bg-gray-900 lg:bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
                <div className="bg-gray-400 rounded shadow-2xl p-7 sm:p-10">
                  <h1 className="mb-4 text-xl text-center sm:mb-6 sm:text-2xl">
                    Login for Updates
                  </h1>
                  <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                  >
                    <div className="space-y-1">
                      <label className="block text-black text-lg">Email</label>
                      <input
                        type="text"
                        placeholder="Enter Email"
                        {...register("email", {
                          required: "Email Address is required",
                        })}
                        className="w-full px-4 py-4 rounded-md border border-green-700 bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                      />
                      {errors.email && (
                        <p className="text-rose-700">{errors.email?.message}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-black text-lg">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        {...register("password")}
                        className="w-full px-4 py-4 rounded-md border border-green-700 bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                      />

                      <button onClick={handleSubmit(handleResetPassword)}>
                        <span className="text-sm mt-8 hover:underline">
                          Forget Password?
                        </span>
                      </button>

                      {errors.password && (
                        <p className="text-rose-700">
                          {errors.password?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      {loginError && (
                        <p className="text-rose-700">{loginError}</p>
                      )}
                    </div>
                    <button
                      className="block w-full px-6 py-2 text-lg font-normal border rounded-md bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 dark:border-gray-100  dark:text-gray-100 "
                      type="submit"
                    >
                      {loading ? <SmallLoader></SmallLoader> : "Login"}{" "}
                    </button>
                  </form>
                  <div className="text-center py-3">OR</div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="block w-full px-6 py-2 text-lg font-normal border rounded-md bg-gradient-to-r from-blue-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 dark:border-gray-100  dark:text-gray-100 "
                  >
                    Continue with Google
                  </button>
                  <p className="py-3 text-center">
                    New to Book Palace?{" "}
                    <Link className="text-blue-700" to="/signup">
                      Create New Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
