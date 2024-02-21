import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error404 from './route/Error404';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Employees from './route/Employees';
import Home from './route/Home';
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "*",
        element: <Error404 />
      }
    ],
  },
  {
    path: "*",
    element: <Error404 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
