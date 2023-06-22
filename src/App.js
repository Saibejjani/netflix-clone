import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged, auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout, login } from './features/userSlice';

function App() {
  const user = null;
  const dispatch = useDispatch();
  useEffect(() => {
    const ubsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Logged In
        dispatch(
          login({
            uid: user.uid,
            emial: user.email,
          })
        );
        console.log(user);
      } else {
        //Not Logged In
        dispatch(logout);
      }
    });

    return ubsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/books" element={<h1>hello</h1>} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
