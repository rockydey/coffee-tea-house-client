import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import ViewCoffee from "../Pages/ViewCoffee/ViewCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-tea-house-server.vercel.app/coffees"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/view-coffee/:id",
        element: <ViewCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-tea-house-server.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-tea-house-server.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
