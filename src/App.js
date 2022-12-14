
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layouts/Main';
import About from './components/About/About'
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import { productsAndCartLoader } from './loaders/poroductsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRout from './routs/PrivateRout';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: ()=> {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <PrivateRout><Inventory></Inventory></PrivateRout>
        },
        {
          path:'about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/shipping',
          element: <PrivateRout><Shipping></Shipping></PrivateRout>
        }
      ]
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
