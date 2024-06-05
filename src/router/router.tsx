import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Signin, Signup, Error, Subcategory, Products, MainLayout,Category,Brands } from "@pages";

const router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="/main/*" element={<MainLayout />}>
          {/* <Route index element={<Dashboad />} /> */}
          <Route index element={<Products />} />
          <Route path="category/:subcategory" element={<Subcategory/>}/>
          <Route path="category"  element={<Category/>} />
          <Route path="brands"  element={<Brands/>} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default router;
