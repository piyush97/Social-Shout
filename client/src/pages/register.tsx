import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: "url('/images/bricks.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-70">
          <h1 className="mb-2 text-lg font-medium">Sign Up</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>
          <form action="">
            <div className="mb-6">
              <input
                type="checkbox"
                className="mr-1 cursor-pointer"
                id="agreement"
              />
              <label htmlFor="agreement" className="text-xs cursor-pointer">
                I agree to get emails about cool stuff on Social Shout
              </label>
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="w-full px-3 py-2 transition duration-200 border border-gray-300 rounded outline-none bg-gray-50 p3 focus:bg-white hover:bg-white"
                placeholder="Email"
              />
            </div>{" "}
            <div className="mb-2">
              <input
                type="text"
                className="w-full px-3 py-2 transition duration-200 border border-gray-300 rounded outline-none bg-gray-50 p3 focus:bg-white hover:bg-white"
                placeholder="Username"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="w-full px-3 py-2 transition duration-200 border border-gray-300 rounded outline-none bg-gray-50 p3 focus:bg-white hover:bg-white"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded bg-blue500">
              Sign Up
            </button>
          </form>
          <small>
            Already a Social Shouter?{" "}
            <Link href="/login">
              <a className="ml-1 text-blue-500 uppercase">Login</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
