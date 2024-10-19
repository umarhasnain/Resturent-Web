import { createContext, useEffect, useState } from "react";
import { auth, collection, db, getDocs, onAuthStateChanged } from "../Firebase/FirebaseConfig.jsx";

// create a new context
export const MyContext = createContext();

// Provider Hook
const ContextProvider = ({ children }) => {

  const [userState, setUserState] = useState([]);

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

  // Fetch user data on mount
  useEffect(()=>{
    setUserState(userData)

  },[])
  

  // Custom object creation 
  const userObj = {
    name: "Umar Hasnain",
    email: "umar12@gmail.com",
  };

  return (
    <MyContext.Provider value={{ userObj ,userState}}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
