import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import pages
import MainContent from './pages/home/components/MainContent';
import Edu from './pages/edu/Edu';
import Home from './pages/home/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/portfolio/Porto';
import LoadIcon from './pages/LoadIcon';
import TrialPage from './pages/TrialPage';
import TrialPage2 from './pages/TrialPage2';
import TrialPage3 from './pages/TrialPage3';


const root = ReactDOM.createRoot(document.getElementById('root'));
const defRoute = [
  {
    path : "/",
    exact: true,
    errorElement: <ErrorPage />,
    element: <Home />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index:true,
            element: <MainContent />,
          },
          {
            path : "/edu",
            element: <Edu />
          },
          {
            path : "/portfolio",
            element: <Portfolio />
          },
          {
            path : "/about",
            element: <About />
          },
        ]
      }
      
    ]
  },
  {
    path : "/trial-1",
    exact: true,
    errorElement: <ErrorPage />,
    element: <TrialPage />,
  },
  {
    path : "/trial-2",
    exact: true,
    errorElement: <ErrorPage />,
    element: <TrialPage2 />,
  },
  {
    path : "/trial-3",
    exact: true,
    errorElement: <ErrorPage />,
    element: <TrialPage3 />,
  }
];

const router = createBrowserRouter(defRoute);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<><LoadIcon /></>}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
