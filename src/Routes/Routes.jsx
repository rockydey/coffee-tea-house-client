import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import ViewCoffee from "../Pages/ViewCoffee/ViewCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffee-tea-house-server-mzgtrf819-projects-rocky.vercel.app/coffees"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/view-coffee/:id",
        element: <ViewCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-tea-house-server-mzgtrf819-projects-rocky.vercel.app/coffees/${params.id}`),
      },
    ],
  },
]);

export default router;
