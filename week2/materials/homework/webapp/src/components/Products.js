import useProducts from "../hooks/useProducts";

function Products() {
  const { products, cart, addProduct, removeProduct, sum } = useProducts();

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  return (
    <div>
      <div className="row align-items-start">
        {products.map((product) => {
          return (
            <div className="card col-3 m-2" key={product.id}>
              <div className="text-center">
                <img style={{ width: "250px" }} src={product.imageURL} />
              </div>
              <div className="card-body">
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
          );
        })}
      </div>
      <form>
        <p className="mt-4 p-2 bg-secondary w-" style={{width: "100%", color: "#fff"}}>You will be charged: <strong>{sum} DKK</strong></p>
        <div className="form-group mt-4 col-md-4">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3" onClick={() => {}}>
          Buy now
        </button>
      </form>
    </div>
  );
}

export default Products;
