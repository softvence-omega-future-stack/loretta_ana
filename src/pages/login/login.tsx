import { UserCircleIcon } from "lucide-react";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password, rememberMe });
    // After successful login:
    // window.location.href = '/machines/machines-overview';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side - Branding */}
        <div className="hidden md:flex bg-gray-900 rounded-3xl p-8 md:p-12 text-white flex-col justify-between border-2 border-[#454F5B]">
          <div className="flex flex-col items-center text-center">
            <img
              src="/image 6.png"
              alt="Boels Logo"
              className="h-12 w-auto mb-2"
            />
            <p className="text-orange-500 text-sm mb-4">Created By Malinovic</p>
            <h2 className="text-2xl font-light text-center mt-2">
              Boels is specialist in machine & tool hire
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl mt-8">
            <img
              src="/loginImage.png"
              alt="Construction equipment"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center py-12 sm:py-16 lg:py-20">
          {/* Centered Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center justify-center bg-gray-100 rounded-full p-2 shadow-md border-2 border-gray-200 ">
              <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <UserCircleIcon className="w-6 h-6" />
              </button>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Log in</h2>
            <p className="text-gray-600 max-w-sm">
              Enter your login credentials to access the database.
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-md mx-auto"
          >
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                User
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="Type your password"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Save user name as cookie.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
