import { createBrowserRouter } from 'react-router-dom'
import { About, Orders, Products, CheckOut, Error, HomeLayout, Landing, Login, PrivacyPolicy, Register, SingleProduct, TermsAndCondition, Cart } from '../pages'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: 'About',
                element: <About />
            },
            {
                path: 'Orders',
                element: <Orders />
            },
            {
                path: 'Products',
                element: <Products />
            },
            {
                path: 'Products/:id',
                element: <SingleProduct />
            },
            {
                path: 'CheckOut',
                element: <CheckOut />
            },
            {
                path: 'PrivacyPolicy',
                element: <PrivacyPolicy />
            },
            {
                path: 'TermsAndCondition',
                element: <TermsAndCondition />
            },
            {
                path: 'Cart',
                element: <Cart />
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