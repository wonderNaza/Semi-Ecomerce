import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ProductDetailPage from "./Components/ProductDetailPage";

//route object pattern
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />
  }
])


//jsx pattern
// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Homepage />}>
//       <Route path="/product-detail" element={<ProductDetailPage />} />
//     </Route>
//   )
// )
export default routes;