import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "bootstrap/js/dist"
import React from 'react'
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import Create from './pages/Create';
import Home from './pages/Home';
import './pages/style.css';
import Podcast from './pages/Podcast';
import Entertainment from './pages/Entertainment';
import Fitness from './pages/Fitness';
import Romance from './pages/Romance';
import Other from './pages/Other';
import Study from './pages/Study';
import ShowData from './pages/ShowData';
import EditBlog from './pages/EditBlog';
// import ThankYou from './pages/ThankYou';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      { index: true, element: <Home/>},
      { path: '/about', element: <About/>},
      { path: '/contact', element: <Contact/>},
      { path: '/create', element: <Create/>},
      { path: '/podcast', element: <Podcast/>},
      { path: '/entertainment', element: <Entertainment/>},
      { path: '/fitness', element: <Fitness/>},
      { path: '/romance', element: <Romance/>},
      { path: '/study', element: <Study/>},
      { path: '/other', element: <Other/>},
      { path: '/show/:id', element: <ShowData /> },
      { path: '/edit/:id', element: <EditBlog /> },
      // { path: '/thank-you', element: <ThankYou /> }
    ]
  }
])



const App = () => {
  return <RouterProvider router={router} />
}


export default App

