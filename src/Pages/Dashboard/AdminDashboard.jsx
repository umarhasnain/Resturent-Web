import React from 'react'
import {auth,onAuthStateChanged} from '../../Firebase/FirebaseConfig.jsx';


const AdminDashboard = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      document.write(user.email)
      console.log(uid);
      
    } else {
      // User is signed out
      console.log("signout");
      
    }
  });
  return (
    <div>
      <h1>Dashbord</h1>
    </div>
  )
}

export default AdminDashboard
