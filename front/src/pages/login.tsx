import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Config
import { clientAxios } from "@/config/clientAxios";

// Custom Hooks
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleSetUser }: any = useAuth();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate if the fields aren't empty
    if ([username, password].includes("")) {
      return alert("All fields are required");
    }

    try {
      const { data } = await clientAxios.post("/account/login", {
        username,
        password,
      });

      // Save the user in the context
      handleSetUser(data.body.data);

      // Save the token in the local storage
      localStorage.setItem("token", data.body.token);

      // Redirect to home
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="lg:w-[30%] xl:max-w-[20%]">
        <Image
          width={300}
          height={100}
          src={"/images/logo.jpg"}
          alt="Img logo"
          className="mx-auto"
        />
        <h1 className="text-yellow-600 font-black text-2xl md:text-4xl capitalize text-center">
          Vendor Manager <br /> <span className="text-gray-800">Login</span>
        </h1>

        <form
          className="my-10 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="w-full bg-pink-700 hover:bg-pink-950 py-3 text-white uppercase font-bold rounded hover:cursor-pointer  transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
