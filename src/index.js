import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import menus from './constants/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AllRoutes = () => {
  return (
    <Routes>
      {menus.map(
          // With elem.component => can pass props <elem.component props={props} />
          // Pass Trought props <component {...props} />
          (elem, index) => <Route path={elem.path} element={<elem.component />} key={index} exact={elem.exact} />
          // (elem, index) => <Route path={elem.path} element={elem.element} key={index} exact={elem.exact} />
      )}
    </Routes>
   )
}

root.render(
  <React.StrictMode>
    <Router >
      <AllRoutes />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
