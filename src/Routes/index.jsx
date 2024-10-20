
import Product from "../Pages/auth/Product.jsx";
import SignIn from "../Pages/auth/SignIn.jsx";
import SignUp from "../Pages/auth/SignUp.jsx";
import AddProduct from "../Pages/Dashboard/Admin/AddProduct.jsx";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard.jsx";
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
        path: '/addproduct',
        element: <AddProduct/>
    },
    {
        path: '*',
        element: <NoPage/>
    },
]


export default routes;