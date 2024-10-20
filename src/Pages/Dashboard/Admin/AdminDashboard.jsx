import React, { useContext, useEffect } from 'react'
import { auth, onAuthStateChanged, signOut } from '../../../Firebase/FirebaseConfig.jsx';
import { MyContext } from '../../../context/myContext.jsx';
import { useNavigate } from 'react-router-dom';
import ResponsiveDrawer from '../../../Components/Common/Drawer.jsx';
import Box from '@mui/material/Box';




const AdminDashboard = () => {
  const navigate = useNavigate();
  const data = useContext(MyContext)
  const showData = data?.userState
  // const {name, email} = showData
  console.log(showData);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);

    } else {
      // User is signed out
      console.log("signout");

    }
  });


  //Sign out the user from the database and redirect to the login page

  // const signOutFunc = () => {
  //   signOut(auth).then(() => {
  //     console.log("// Sign-out successful.");
  //     // navigate('/signup')

  //       }).catch((error) => {
  //         console.log("Error");

  //         // An error happened.
  //       });

  // }

  // useEffect(()=>{
  //   signOutFunc()
  // },[])


  return (
    <div className='flex flex-col'>


   
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>


      <ResponsiveDrawer />
      <h1>Hello</h1>
      </Box>
   
    

      {/*       
      {showData?.email}
      {showData?.name} */}

    </div>
  )
}

export default AdminDashboard

