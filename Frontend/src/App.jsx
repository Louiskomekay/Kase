// PAGE IMPORTS
import { About, Orders, Products, CheckOut, Error, HomeLayout, Landing, Login, PrivacyPolicy, Register, SingleProduct, TermsAndCondition, Cart } from './pages'

//ROUTER IMPORT
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
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

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App