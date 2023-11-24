import "./App.css";
import Authpage from "./pages/auth-page";
import Categorypage from "./pages/category-page";
import Homepage from "./pages/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/category/:category",
    element: <Categorypage />,
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
