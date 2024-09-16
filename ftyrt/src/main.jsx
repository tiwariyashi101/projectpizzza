import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Cart.jsx';
import Offers from './Offers.jsx';
import Sign from './Sign.jsx';
import SingleProduct from './SingleProduct.jsx';
import ThemeProvider from './utility/ThemeContext.jsx';
import { Suspense, lazy } from 'react';
import Login from './Login.jsx';
import { Provider } from 'react-redux';
import store from './utility/Store.jsx';

// Lazy-loaded component
const Food = lazy(() => import('./Food.jsx'));

// Create the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/offers',
    element: <Offers />,
  },
  {
    path: '/recipes/:id',
    element: <SingleProduct />,
  },
  {
    path: '/food',
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Food />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign',
    element: <Sign />,
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

