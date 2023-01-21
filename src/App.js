import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Example from "./components/Example";
import SingleProduct from "./components/SingleProduct";

// const router = createBrowserRouter([
//   {
//     path: "/",

//     element: (
//       <>
//         <h1>Main page</h1>
//         <Link to={"/helloWorld"}>Hello Page</Link>
//       </>
//     ),
//   },
//   {
//     path: "/helloWorld",

//     element: <h2>Hello page</h2>,
//   },
// ]);

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Main page</h1>
                <Link to={"/products"}>Products Page</Link>
              </>
            }
          />

          <Route path="/products" element={<Example />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>

        {/* <RouterProvider router={router} /> */}
      </div>
    </>
  );
}

export default App;
