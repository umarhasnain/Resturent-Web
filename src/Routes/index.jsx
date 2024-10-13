
import Product from "../Pages/auth/Product.jsx";
import SignIn from "../Pages/auth/SignIn.jsx";
import SignUp from "../Pages/auth/SignUp.jsx";
import AdminDashboard from "../Pages/Dashboard/adminDashboard.jsx";
import Home from "../Pages/Home.jsx";
import NoPage from "../Pages/NoPage.jsx";


const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    },
    {
        path: '/product',
        element: <Product/>
    },
    {
        path: '/admin',
        element: <AdminDashboard/>
    },
    {
        path: '*',
        element: <NoPage/>
    },
]


export default routes;