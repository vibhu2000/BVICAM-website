
import AllRoutes from "./Routes";
import React from "react";
import { createRoot } from 'react-dom/client';
import { useLocation } from "react-router-dom";



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <AllRoutes/>);
 