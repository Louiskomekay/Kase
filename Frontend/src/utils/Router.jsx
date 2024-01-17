//IMPORTS
import { createBrowserRouter } from 'react-router-dom'
import { About, Orders, Products, CheckOut, Error, HomeLayout, Landing, Login, PrivacyPolicy, Register, SingleProduct, TermsAndCondition, Cart, ContactUs } from '../pages'
import { ErrorElement } from '../components';

//LOADERS
import { loader as landingLoader } from '../pages/Landing';
//ACTIONS

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader,
            },
            {
                path: 'About',
                element: <About />,
                errorElement: <ErrorElement />
            },
            {
                path: 'Orders',
                element: <Orders />,
                errorElement: <ErrorElement />
            },
            {
                path: 'Products',
                element: <Products />,
                errorElement: <ErrorElement />
            },
            {
                path: 'Products/:id',
                element: <SingleProduct />,
                errorElement: <ErrorElement />
            },
            {
                path: 'CheckOut',
                element: <CheckOut />,
                errorElement: <ErrorElement />
            },
            {
                path: 'PrivacyPolicy',
                element: <PrivacyPolicy />,
                errorElement: <ErrorElement />
            },
            {
                path: 'TermsAndCondition',
                element: <TermsAndCondition />,
                errorElement: <ErrorElement />
            },
            {
                path: 'ContactUs',
                element: <ContactUs />,
                errorElement: <ErrorElement />
            },
            {
                path: 'Cart',
                element: <Cart />,
                errorElement: <ErrorElement />
            },
        ]
    },
    {
        path: '/Login',
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: '/Register',
        element: <Register />,
        errorElement: <Error />
    },
])

export default Router;