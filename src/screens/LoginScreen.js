import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <button
          className="loginscreen__button"
          onClick={() => {
            setSignIn(true);
          }}
        >
          Sign In
        </button>
        <div className="loginscreen__gradient" />
      </div>

      <div className="loginscreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programmes and more. </h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginscreen__input">
              <form className="loginscreen__form">
                <input type="email" placeholder="Email address" />
                <button className="loginscreen__getstarted">GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
