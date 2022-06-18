import * as React from "react";
import {Link,Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to='/invoices'>Invoices</Link>
        <Link to='/expences'>Expences</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
