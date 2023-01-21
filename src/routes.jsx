import { createBrowserRouter } from "react-router-dom";

import Example from "./Example";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Example />,
  },

  {
    path: "/salom",
    element: <h1>Salom</h1>,
  },
]);
