import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/404.JS";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const appRouter =createBrowserRouter([
  {path:'/',
  element:<AppLayout/>
},
{
  path:'/about',
  element:<About/>
},
{
  path:'/contact',
  element:<Contact/>
},
{
  path:'/*',
  element:<Error/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter} />);
