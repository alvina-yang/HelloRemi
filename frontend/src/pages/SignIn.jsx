import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/home');
  };

  return (
    <Parallax pages={3} style={{ backgroundColor: 'black' }}>
      {/* Welcome Layer */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1 className="text-5xl text-white">Welcome to HelloRemi!</h1>
      </ParallaxLayer>

      {/* Description Layer */}
      <ParallaxLayer
        offset={0.7}
        speed={0.9}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <p className="text-lg p-8 text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </ParallaxLayer>

      {/* Second Description */}
      <ParallaxLayer
        offset={1}
        speed={0.9}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <p className="text-lg p-8 text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </ParallaxLayer>

      {/* Sign-in Form Layer */}
      <ParallaxLayer
        offset={1.7}
        speed={0.7}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div className="p-8 bg-black rounded shadow-lg">
          <h1 className="text-4xl mb-4 text-center text-white">Sign In</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 text-lg border rounded border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 text-lg border rounded border-gray-300"
          />
          <button
            onClick={handleSignIn}
            className="w-full p-2 mb-4 text-lg text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
          <p className="text-center p-2 text-white">
            Don't have an account?
            <button
              onClick={() => navigate('/create-account')}
              className="text-blue-500 p-2 hover:underline"
            >
              Create an Account
            </button>
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default SignIn;
