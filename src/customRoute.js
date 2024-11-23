import React from "react";
import Add from "./Components/Add";
import Update from "./Components/Update";
import Show from "./Components/Show";
import App from "./Components/App";

const customRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addArticles",
        element: <Add />,
      },
      {
        path: "/updateArticles",
        element: <Update />,
      },
      {
        path: "/getArticles",
        element: <Show />,
      },
    ],
  },
]);

export default customRoute;
