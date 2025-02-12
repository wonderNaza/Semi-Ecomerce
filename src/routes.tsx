import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ProductDetailPage from './Components/ProductDetailPage';
import Category from './Components/Category';
import CartPage from './Components/CartPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Layout';

//route object pattern
// const routes = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Homepage />,
// 	},
// 	{
// 		path: '/product-detail',
// 		element: <ProductDetailPage />,
// 	},
// 	{
// 		path: '/category',
// 		element: <Category />,
// 	},
// 	{
// 		path: '/cartpage',
// 		element: <CartPage />,
// 	},
//   {
//     path: "/auth",
//     children: [
//       {
//         path: "login",
//         element: <Login />
//       },
//       {
//         path: "signup",
//         element: <Signup />
//       }
//     ]
//   },
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Homepage />
//       },
//       {
//         path: "/category",
//         element: <Category />
//       }
//     ]
//   }
// ]);

//jsx pattern
const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Homepage />} />,
    // <Route path="/product-detail" element={<ProductDetailPage />} />,
    // <Route path='/category' element={<Category />} />,
    <Route path='/catpage' element={<CartPage />} />,
    
    // Nested Route
    <Route path='/auth'>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>,

    // Layout Route
    <Route element={<Layout />}>
      <Route path='/home' element={<Homepage />} />
      <Route path='/category' element={<Category />} />
      <Route path='/product-detail' element={<ProductDetailPage />} />
    </Route>
  ])
)
export default routes;
