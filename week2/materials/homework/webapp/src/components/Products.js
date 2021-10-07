import { useState } from "react";
import useNotifications from "../hooks/useNotification";
import useProducts from "../hooks/useProducts";
import { useFetch } from "../hooks/useFetch";

function Products() {
  const { products, cart, addProduct, removeProduct, sum } = useProducts();
  const { createNotification } = useNotifications();

  const [email, setEmail] = useState("");

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-start">
        {products.map((product) => {
          return (
            <div className="col-sm d-flex mr-2 mb-2" key={product.id}>
              <div
                className="card flex-fill"
                key={product.id}
                style={{ width: "18rem"}}
              >
                <div className="card-body">
                  <div className="text-center">
                    <img
                      style={{ width: "250px" }}
                      src={product.imageURL}
                      className="card-img-top"
                      alt={product.name}
                    />
                  </div>
                  <h2>{product.name}</h2>

                  <p className="card-text">{product.description}</p>
                  <p>
                    <strong>
                      price: {product.price} {product.currency}
                    </strong>
                  </p>
                  {isInCart(product) && (
                    <button
                      onClick={() => addProduct(product)}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  )}
                  {!isInCart(product) && (
                    <button
                      onClick={() => removeProduct(product)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createNotification(email, sum);
        }}
      >
        <p
          className="mt-4 p-2 bg-secondary w-"
          style={{ width: "100%", color: "#fff" }}
        >
          You will be charged: <strong>{sum} DKK</strong>
        </p>
        <div className="form-group mt-4 col-md-4">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-3">
          Buy now
        </button>
      </form>
    </div>
  );
}

export default Products;
