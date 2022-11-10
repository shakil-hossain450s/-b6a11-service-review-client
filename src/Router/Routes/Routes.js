import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import AddService from "../../Pages/AddService/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/Review/MyReview/MyReview";
import ShowReview from "../../Pages/Review/ShowReview/ShowReview";
import ServiceCardDetails from "../../Pages/Services/ServiceCardDetails";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/Signup/Login/Login";
import Register from "../../Pages/Signup/Register/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                element: <ServiceCardDetails></ServiceCardDetails>,
                loader: ({ params }) => fetch(`https://service-review-server-eta.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myReview',
                element: <MyReview></MyReview>
            },
            {
                path: "/addService",
                element: <AddService></AddService>
            },
            {
                path: '/allReviews',
                element: <ShowReview></ShowReview>
            }
        ]
    }
])