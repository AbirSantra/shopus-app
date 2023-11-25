import "./App.css";
import Authpage from "./pages/auth-page";
import Categorypage from "./pages/category-page";
import Homepage from "./pages/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Productpage from "./pages/product-page";
import Cartpage from "./pages/cart-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/auth",
    element: <Authpage />,
  },
  {
    path: "/cart",
    element: <Cartpage />,
  },
  {
    path: "/category/:category",
    element: <Categorypage />,
  },
  {
    path: "/product/:productid",
    element: <Productpage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
