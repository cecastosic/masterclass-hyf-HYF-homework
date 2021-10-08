import { useState } from "react";
import useNotifications from "../hooks/useNotification";
import useProducts from "../hooks/useProducts";
import useSubscriptions from "../hooks/useSubscriptions";

function Products() {
  const { products, cart, addProduct, removeProduct, sum } = useProducts();
  const { addSubscription, successData, error } =
    useSubscriptions();
  const { createNotification } = useNotifications();

  const [email, setEmail] = useState("");
  const [emailRequired, setEmailRequired] = useState(false);
  const [errorSubscribed, setErrorSubscribed] = useState("");

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  const productName = (id) => {
    return products.filter((item) => item.id === id)[0].name;
  };

  return (
    <div className="position-relative container-fluid">
      <div style={{ width: "60%" }}>
        <div className="row align-items-start">
          {products.map((product) => {
            return (
              <div className="col-sm d-flex mr-1 mb-2" key={product.id}>
                <div
                  className="card"
                  key={product.id}
                  style={{ width: "20rem" }}
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
                    <button
                      onClick={() =>
                        addSubscription(
                          product,
                          email,
                          setEmailRequired,
                          setErrorSubscribed
                        )
                      }
                      className="btn btn-warning mx-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="position-fixed"
        style={{ width: "30%", left: "60%", top: "5rem" }}
      >
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
          <div className="form-group mt-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailRequired(false);
                setErrorSubscribed("");
              }}
              autoFocus
              required
            />
            {emailRequired && (
              <small className="form-text text-danger d-block">
                Please enter your email
              </small>
            )}
            {errorSubscribed && (
              <small className="form-text text-danger d-block">
                {errorSubscribed}
              </small>
            )}
            {successData.id && (
              <small className="form-text text-success d-block">
                {`${successData.email} successfully subscribed to ${productName(
                  successData.productID
                )}`}
              </small>
            )}
            {error && (
              <small className="form-text text-danger d-block">
                {error}
              </small>
            )}
            <small
              id="emailHelp"
              className="form-text text-muted d-block"
            >
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" className="btn btn-primary mt-3 mb-3">
            Buy now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Products;
