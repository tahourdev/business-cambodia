import React from "react";
import { createBrowserRouter, Route, RouterProvider, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// import Categories from "./components/Categories";
import PopularPost from "./pages/PopularPosts";
import Article from "./pages/Article";
import useFetch from "./hook/useFetch";
import MonthlyPopularPost from "./pages/MonthlyPopularPost";
import Category from "./pages/Category";

import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:slug", element: <Category /> },
      { path: "/popular", element: <PopularPost /> },
      { path: "/popular/monthly", element: <MonthlyPopularPost /> },
      { path: "/articles/:slug", element: <Article /> },
    ],
  },
]);
const App = () => {
  // const { data } = useFetch("/articles?populate[0]=categories?populate=*");
  const { data } = useFetch("/articles?populate[0]=*");
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
