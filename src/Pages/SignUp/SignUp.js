import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallLoader from "../../Components/Loader/SmallLoader";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
// import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser, googleSignIn, loading, setLoading } =
    useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setsignUpError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignUp = (data) => {
    // console.log(data.role);
    setsignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          displayName: data.name,
          photoURL: data.photoURL,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setsignUpError(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(user.displayName, user.email, "buyer");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saved User", data);
        if (data.acknowledged) {
          setLoading(false);
          toast.success("Successfully Created Account");
        }
        setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <div className="lg:relative">
        <img
          src="https://st2.depositphotos.com/3944627/8072/i/450/depositphotos_80729078-stock-photo-a-pile-of-books-on.jpg"
          className="absolute inset-0 object-cover w-full h-full lg:block hidden"
          alt=""
        />
        <div className="lg:relative bg-gray-300 lg:bg-gray-900 lg:bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
            <div className="w-full max-w-2xl xl:px-8 xl:w-9/12 mx-auto">
              <div className="bg-gray-400 rounded shadow-2xl p-7 sm:p-10">
                <h1 className="mb-4 text-xl text-center sm:mb-6 sm:text-2xl">
                  SignUp for Updates
                </h1>
                <form
                  onSubmit={handleSubmit(handleSignUp)}
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1">
                    <label className="block text-black text-lg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("name", {
                        required: "Name is Required",
                      })}
                      className="w-full px-4 py-4 rounded-md border border-green-700 bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                    />
                    {errors.name && (
                      <p className="text-rose-700">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="photURL"
                      className="block text-black text-lg"
                    >
                      Photo URL
                    </label>
                    <input
                      type="text"
                      {...register("photoURL", {
                        required: "PhotoURL is Required",
                      })}
                      id="photURL"
                      placeholder="Enter PhotoURL"
                      className="w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black font-normal text-[16px] focus:border-violet-400"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-black text-lg"> Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", {
                        required: true,
                      })}
                      className="w-full px-4 py-4 rounded-md border border-green-700 bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                    />
                    {errors.email && (
                      <p className="text-rose-700">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="block text-black text-lg">
                      {" "}
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters long",
                        },
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          message:
                            "Password must have uppercase, number and special characters",
                        },
                      })}
                      className="w-full px-4 py-4 rounded-md border border-green-700 bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                    />
                    {errors.password && (
                      <p className="text-rose-600">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-black text-lg">
                      Select One
                    </label>
                    <select
                      {...register("role")}
                      className="w-full px-4 py-4 mt-0 rounded-md border border-green-700 bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                    >
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                  </div>

                  <button
                    className="block w-full px-6 py-2 text-lg font-normal border rounded-md bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 dark:border-gray-100  dark:text-gray-100 "
                    type="submit"
                  >
                    {loading ? <SmallLoader></SmallLoader> : "Sign Up"}
                  </button>

                  {signUpError && (
                    <p className="text-rose-600">{signUpError}</p>
                  )}
                </form>
                <div className="text-center py-3">OR</div>
                <button
                  onClick={handleGoogleSignIn}
                  className="block w-full px-6 py-2 text-lg font-normal border rounded-md bg-gradient-to-r from-blue-700 to-sky-600 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 dark:border-gray-100  dark:text-gray-100 "
                >
                  Continue with Google
                </button>
                <p className="py-3 text-center">
                  Already Have an Acoount?{" "}
                  <Link className="text-blue-700" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
