import { createBrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ProductDetailPage from './Components/ProductDetailPage';
import Category from './Components/Category';
import CartPage from './Components/CartPage';

//route object pattern
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/product-detail',
		element: <ProductDetailPage />,
	},
	{
		path: '/category',
		element: <Category />,
	},
	{
		path: '/cartpage',
		element: <CartPage />,
	},
]);

//jsx pattern
// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Homepage />}>
//       <Route path="/product-detail" element={<ProductDetailPage />} />
//     </Route>
//   )
// )
export default routes;
