// pages/products/[id].js
import Loader from "@/components/Loader";
import axios from "axios";


async function  ProductDetail({params}) {
  const response = await axios.get(`https://dummyjson.com/products/${params.id}`);
  const product = response.data.products;

  if (!product) return <Loader />;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Stock: {product.stock}</p>
      <p>Rating: {product.rating} / 5</p>
      <p>Tags: {product.tags.join(', ')}</p>
      <p>Weight: {product.weight} kg</p>
      <p>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
      <p>Warranty: {product.warrantyInformation}</p>
      <p>Shipping Info: {product.shippingInformation}</p>
      <p>Availability: {product.availabilityStatus}</p>
      
      <h2>Reviews</h2>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
            <p>Reviewer: {review.reviewerName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ProductDetail;