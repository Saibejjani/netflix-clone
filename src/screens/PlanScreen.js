import React, { useEffect, useState } from 'react';

import './PlanScreen.css';
import db, { getDocs, collection, doc, setDoc } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { arrayUnion, updateDoc } from 'firebase/firestore';

const PlanScreen = () => {
  const user = useSelector(selectUser);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));

      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        setProducts((products) => [...products, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadCheckOut = async (price) => {
    await updateDoc(doc(db, 'customers', user.uid), {
      subscription: arrayUnion(price),
    });
    console.log(user);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="planscreen">
      {products.map((productData) => {
        console.log(products);
        return (
          <div className="planscreen__plan">
            <div className="planscreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() => {
                loadCheckOut(productData.price);
              }}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen;
