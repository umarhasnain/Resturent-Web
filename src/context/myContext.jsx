import { createContext, useEffect, useState } from "react";
import { auth, collection, db, doc, getDocs, onAuthStateChanged ,onSnapshot,query  } from "../Firebase/FirebaseConfig.jsx";

// create a new context
export const MyContext = createContext();

// Provider Hook
const ContextProvider = ({ children }) => {

  const [userState, setUserState] = useState([]);
  const [product,setProduct] = useState([])
console.log(product);

  const userData =  () => {

    //Check if user is authenticated
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        // Get user data from Firestore
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          if(doc.id === uid){
            setUserState(doc.data());
          
            console.log(doc.id, " => ", doc.data());
          }
        });
        console.log("Context API",uid);
        
      } else {
        // User is signed out
        console.log("signout");
        
      }
    });

  
  };


    //Get Products From Firebase

    const getProducts = () => {
      const  q =  query(collection(db, "products"));
      const unsubscribe =  onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data());
        });
        setProduct(cities)
        console.log("Current Dt",cities);
      });
      
    }

    
  // Fetch user data on mount
  useEffect(()=>{
    setUserState(userData)
  

    getProducts()

  },[])
  




  // Custom object creation 
  const userObj = {
    name: "Umar Hasnain",
    email: "umar12@gmail.com",
  };

  return (
    <MyContext.Provider value={{ userObj ,userState,product}}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
