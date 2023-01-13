import React from "react";
import { Link, useParams } from "react-router-dom";
import User from "./User";

function Products() {
  const params = useParams();
  const userId = params.userId;

  // https://dev.to/mondal10/react-router-lazy-load-route-components-4df
  // https://blog.loginradius.com/engineering/react-context-api/
  
  return <div className="product-box pt-20">
    <div>
      <nav className="mt-12 flex  space-x-3">
        <Link to='featured' className="border border-blue-900 rounded p-2">Featured</Link>
        <Link to="new" className="border border-blue-900 rounded p-2">New</Link>
      </nav>
    </div>
  <User />
  </div>;
}

export default Products;
