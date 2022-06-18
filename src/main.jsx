import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from "./App";
import "./main.css";
import Expences from './Expences';
import Invoices from './Invoices';
import Invoice from './routes/Invoice';


let rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='invoices' element={<Invoices/>}>
          <Route path=':invoiceId' element={<Invoice/>}/>
        </Route>
        <Route path='expences' element={<Expences/>}/>
        <Route path='*' element={<p>nothing here</p>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
rootElement
);
