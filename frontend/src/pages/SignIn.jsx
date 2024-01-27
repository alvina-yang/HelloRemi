import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { leaves, mugunghwa, pinkwhite, sunflower } from '../assets/Assets';
import FlowerCanvas from './canvas/Flower';

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
      <ParallaxLayer
        offset={0}
        speed={-0.2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100, // Ensure it's behind everything
        }}
      >
       <FlowerCanvas />
      </ParallaxLayer>
      {/* Welcome Layer */}
      <ParallaxLayer
        offset={0.2}
        speed={0.5}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
      
        <h1 className="text-5xl z-1000 text-h1text">Welcome to...</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.3}
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
        speed={0.3}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <p className="text-lg p-8 text-center text-h2text"> <span className='text-peach-300'>HelloRemi</span> is a groundbreaking platform designed to bring the warmth of <span className=" text-peach-300">nostalgia</span> and cherished 
        memories into the hands of those who treasure them most. At the heart of HelloRemi lies an innovative approach to reminiscence therapy, offering a 
        personalized experience that transcends traditional methods. Our service is crafted to awaken the senses, stir emotions, and provide a comforting bridge 
        to the past for individuals seeking solace in their treasured memories. By harnessing the power of narrative and sensory cues, HelloRemi creates a 
        tapestry of moments that not only celebrate life stories but also foster a deep connection with one's history and identity. 
        </p>
        </ParallaxLayer>

      {/* Second Description */}
      <ParallaxLayer
        offset={1}
        speed={0.2}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <p className="text-lg p-8 text-center text-h2text"> It's more than a tool; it's a companion on a journey through time, unlocking the timeless joy and profound sense of belonging that only <span className=" text-peach-100 glow-on-hover hover:scale-100 cursor-pointer">nostalgia</span> can bring.</p>
      </ParallaxLayer>

      {/* Sign-in Form Layer */}
      <ParallaxLayer
        offset={1.8}
        speed={0.1}
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