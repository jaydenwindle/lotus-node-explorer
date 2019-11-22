import React, { useState } from "react";
import { Link } from "@reach/router";
import lotusLogo from "../lotus-logo.png";

const Login = () => {
  const [host, setHost] = useState(null);
  const [token, setToken] = useState(null);
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <img src={lotusLogo} className="mb-4 w-40 mx-auto" />
            <h1 className="font-bold text-3xl text-center">Node Explorer</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Host
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="localhost"
              value={host}
              onChange={e => setHost(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Token
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={token}
              onChange={e => setToken(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={`/explorer?host=${host}&token=${token}`}
              className="w-full"
            >
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Explore
              </button>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; Made with ❤️ by{" "}
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="https://twitter.com/jayden_windle"
          >
            @jayden_windle
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
