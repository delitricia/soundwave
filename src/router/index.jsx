import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Layout from '../layout/Layout';

import {createBrowserRouter} from 'react-router'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        { 
            index: true, 
            Component: Home 
        },
        {
            path: "/about-us",
            Component: AboutUs,
        },
        {
            path: "/contact",
            Component: Contact,
        }
    ]
  }
]);
