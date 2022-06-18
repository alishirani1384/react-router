
import {getInvoices} from './data';
import {Link,Outlet} from 'react-router-dom';
export default function Invoices() {
  let invoices=getInvoices()
  return (
    <main style={{ padding: "1rem 0" }}>
      <nav>
        {invoices.map((i)=>(
          <Link to={`invoices/${i.number}`} key={i.number}>{i.name}</Link>
        ))}
      </nav>
      <Outlet/>
    </main>
  );
}