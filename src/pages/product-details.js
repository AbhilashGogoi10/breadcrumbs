import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  console.log(product);

  return (
    <div>
      <h2>Product Details</h2>

      {product ? (
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 300 }}
            src={product.thumbnail}
            alt={product.title}
          />

          <div>
            <h3>{product?.title}</h3>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;


// import {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

// const ProductDetail = () => {
//   const {id} = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data));
//   }, [id]);

//   return (
//     <div>
//       <h2>Product Detail Page</h2>
//       {product ? (
//         <div>
//           <img src={product.thumbnail} alt="Product" />
//           <h3>{product.title}</h3>
//           <h3>$ {product.price}</h3>
//           <p>{product.description}</p>
//         </div>
//       ) : (
//         // this is not the right way to do loading, create a separate state for this
//         // This is temporary solution for breadcrumbs tutorial
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;
