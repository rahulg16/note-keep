import React from "react";

const LoginScreen = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-black">
    //   <div className="w-full max-w-md">
    //     <form className="bg-white shadow-lg rounded-lg px-8 py-6">
    //       <h2 className="text-3xl font-bold mb-6 text-black">Login</h2>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="username"
    //         >
    //           Username
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Enter your username"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="password"
    //           type="password"
    //           placeholder="Enter your password"
    //         />
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <button
    //           className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Sign In
    //         </button>
    //         <a
    //           className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-700"
    //           href="/"
    //         >
    //           Forgot Password?
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded-lg px-8 py-6">
          <h2 className="text-3xl font-bold mb-6 text-black">Login</h2>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-700"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;