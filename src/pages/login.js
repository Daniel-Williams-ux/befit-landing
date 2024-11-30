import React, { useState } from 'react';

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Step Section */}
      <div className="text-center mb-6">
        <p className="text-sm font-medium text-gray-600">STEP 1/5</p>
        <h1 className="text-2xl font-semibold text-black">Authentication</h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-6">
        {/* Title */}
        <h2 className="text-left text-3xl font-bold text-black">Let’s get you in</h2>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="••••••••••••"
              className="w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="p-3 text-blue-500 text-sm font-medium hover:underline"
            >
              {passwordVisible ? 'Hide Password' : 'Reveal Password'}
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-center text-sm font-medium">
          Continue →
        </button>
      </div>

      {/* Continue with Google */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <img src="/images/google-icon.png" alt="Google" className="w-6 h-6" />
        <p className="text-sm font-medium text-gray-600">Continue with Google</p>
      </div>

      {/* Help Center */}
      <div className="mt-4 text-left w-full max-w-md">
        <a href="/help" className="text-sm text-blue-600 hover:underline">
          * Help Center
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
