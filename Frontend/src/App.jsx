//STYLED IMPORT
import styled, { ThemeProvider } from 'styled-components'

// PAGE IMPORTS
import { About, Orders, Products, CheckOut, Error, HomeLayout, Landing, Login, PrivacyPolicy, Register, SingleProduct, TermsAndCondition, Cart } from './pages'

//ROUTER IMPORT
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//THEMES STYLING
import { LightTheme, DarkTheme } from './utils/Themes'
const Wrapper = styled.div`
  color:${({ theme }) => theme.color};
  background:${({ theme }) => theme.backgroundColor};
  .cardColor{
    background: ${({ theme }) => theme.cardColor};
  }
  .formInput{
    border: ${({ theme }) => theme.stroke};
    color:${({ theme }) => theme.color} ;
  }
  .strokeBtn{
    border: ${({ theme }) => theme.stroke};
    color:${({ theme }) => theme.strokeBtnColor};
  }
  .strokeBtn:hover{
    background:var(--Blue2);
    border: ${({ theme }) => theme.strokeBorderHover};
    color:${({ theme }) => theme.backgroundColor};
  }
  .pseudoBackgroundColor{
    background:${({ theme }) => theme.pseudoBackgroundColor};
  }
  .nav-container {
    color: ${({ theme }) => theme.color};
    background :${({ theme }) => theme.NavBackgroundColor};
    .link {
      color: ${({ theme }) => theme.color};
    }
  }
  /* .navLink{
    background: ${({ theme }) => theme.color};
  } */
`

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
    <ThemeProvider theme={DarkTheme}>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

