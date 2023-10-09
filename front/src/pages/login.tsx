import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="lg:w-[30%] xl:max-w-[20%]">
        <h1 className="text-yellow-600 font-black text-2xl md:text-4xl capitalize text-center">
          Vendor Manager <br /> <span className="text-gray-800">Login</span>
        </h1>

        <form className="my-10 bg-white shadow rounded-lg p-10">
          {/* Username */}
          <div className="my-5">
            <label
              htmlFor="username"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full mt-2 p-3 border rounded-xl bg-gray-50  focus:outline-yellow-600"
            />
          </div>

          {/* Password */}
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border rounded-xl bg-gray-50  focus:outline-yellow-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
