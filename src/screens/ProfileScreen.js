import React from 'react';

import './ProfileScreen.css';
import PlanScreen from './PlanScreen';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth, signOut } from '../firebase';
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="profilescreen">
      <Nav />
      <div className="profilescreen__body">
        <h1>Edit profile</h1>
        <div className="profilescreen__info">
          <img
            src="https://loodibee.com/wp-content/uploads/Netflix-avatar-3.png"
            alt=""
          />
          <div className="profilescreen__details">
            <h2>{user.email}</h2>
            <div className="profilescreen__plans">
              <h3>Plans (Current Plan : )</h3>
              <PlanScreen />
              <button
                onClick={() => {
                  signOut(auth);
                }}
                className="profilescreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
