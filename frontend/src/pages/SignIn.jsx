import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
const SignIn = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "a new generation of remembering",
     "innvoative reminiscence therapy",
      "a way to help your loved ones",
       "HelloRemi!"];
  const handleSignIn = () => {
    navigate('/home');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < TEXTS.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(intervalId); // Clear interval when reaching the last text
          return prevIndex;
        }
      });
    }, 3000); // every 3 seconds
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Parallax pages={3} className='bg-primary'>
      {/* Welcome Layer */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1 className="text-5xl z-1000 text-h1text">Welcome to...</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.2}
        speed={0.4}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'full' }}
      >
        <h1>
        <TextTransition
        springConfig={presets.default}
        className="text-4xl w-full-screen text-h2text">
          {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </ParallaxLayer>
      {/* Description Layer */}
      <ParallaxLayer
        offset={0.7}
        speed={0.9}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <p className="text-lg p-8 text-center text-h2text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
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
        <p className="text-lg p-8 text-center text-h2text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
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
        <div className="p-8 bg-secondary rounded shadow-lg">
          <h1 className="text-4xl mb-4 text-center text-h1text">Sign In</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 text-lg border rounded border-h2text"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 text-lg border rounded border-h2text"
          />
          <button
            onClick={handleSignIn}
            className="w-full p-2 mb-4 text-lg text-white bg-dustyblue-600 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
          <p className="text-center p-2 text-h2text">
            Don't have an account?
            <button
              onClick={() => navigate('/create-account')}
              className="text-h1text p-2 hover:underline"
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