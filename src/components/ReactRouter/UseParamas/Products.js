import React from "react";
import { Link, useParams } from "react-router-dom";

function Products({ products }) {
    let {id} = useParams();
    const product = products

    const {name,img} = product;
    {console.log(id)}
  return (
    <div className="product-box pt-20">
      <h2 className="title"> Products Component</h2>
      <div className="box">
        {/* {Object.entries(products).map(([id, { name, img }]) => (
          <li key={id}>
            <Link to={`/product/${id}`}>
              <h2 className="product-name">{name}</h2>
              <img src={img} alt={name} />
            </Link>
          </li>
        ))} */}
           {/* <h2>{slug}</h2> */}
            <h3>Brand: {name}</h3>
            <img src={img}  alt={name}/>
      </div>
    </div>
  );
}

export default Products;
