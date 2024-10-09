import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    console.log('Form submitted:', { isLogin, userType, email, password });
    onLogin(userType);
    navigate(userType === 'patient' ? '/patient-dashboard' : '/doctor-dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-600">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <div className="mb-6 flex justify-center">
          <button
            className={`px-4 py-2 ${isLogin ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l transition-colors duration-300`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${!isLogin ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-r transition-colors duration-300`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">I am a</label>
            <select
              className="input"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;