import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";

import { Signin, Signup,Error } from "@pages";

const router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="
        *" element={<Error/>} />
      </Route>
    )
   
  );
  return <RouterProvider router={router}/>
};

export default router
