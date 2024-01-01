import Image from "next/image";
import logo from "../../public/startup.png";
import coffee from "../../public/puzzle.png";

export default function Home() {
  return (
    <div className="flex items-center my-12 h-screen w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg  shadow-lg lg:max-w-5xl">
      <div className="hidden bg-cover lg:block lg:w-2/3  bg-slate-500 h-full">
        <section className="relative flex h-full rounded-lg ">
          <Image
            src={coffee}
            alt=""
            fill
            className="absolute inset-0 h-full w-full object-contain opacity-80"
          />
        </section>
      </div>

      <div className="w-full px-6 md:px-16 lg:w-1/2 xl:space-y-4 ">
        <div className="flex justify-center mx-auto">
          <Image
            className="w-auto h-14 "
            src={logo}
            alt=""
            width={100}
            height={100}
          />
        </div>

        <p className="py-3 text-2xl text-center text-gray-600 ">
          Welcome back!
        </p>

        <button className="w-full text-sm flex items-center justify-center gap-x-3 text-gray-500 py-2 border rounded-lg  hover:bg-gray-50 duration-150 active:bg-gray-100">
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Login with Google
        </button>

        <div className="flex items-center justify-between py-6">
          <span className="w-1/5 border-b lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b lg:w-1/4"></span>
        </div>

        <div className="mt-4">
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-gray-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-gray-300 placeholder:text-sm"
            type="email"
            placeholder="Email Address"
          />
        </div>

        <div className="mt-4">
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-gray-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-gray-300 placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex px-2 items-center justify-between text-sm">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="remember-me-checkbox"
              className="checkbox-item peer hidden"
            />
            <label
              htmlFor="remember-me-checkbox"
              className="relative flex w-5 h-5 bg-white peer-checked:bg-pink-600 rounded border ring-offset-2 ring-pink-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
            ></label>
            <span className="text-gray-500">Keep me logged in</span>
          </div>
          <a
            href="#"
            className="text-center underline text-xs text-gray-600 hover:text-fuchsia-500"
          >
            Forgot password?
          </a>
        </div>
        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm tracking-wide bg-purple-300 text-white uppercase transition-colors duration-300 transform rounded-lg  hover:bg-pink-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Now
          </button>
        </div>
        <span className="w-1/5 border-b lg:w-full"></span>

        <p className="text-center text-sm text-gray-500">
          Don't have an account yet?
          <a
            href=""
            className="font-medium mx-2 text-pink-600 hover:text-pink-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
