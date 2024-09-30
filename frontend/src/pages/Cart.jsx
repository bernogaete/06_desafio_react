import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Cart({ cart, setCart }) {
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Filtrar para eliminar pizzas con cantidad <= 0
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const pizzasInCart = cart.filter((pizza) => pizza.quantity > 0);

  return (
    <div className="carrito-principal">
      <h2>Tu Carrito de compras</h2>
      {pizzasInCart.length > 0 ? (
        pizzasInCart.map((pizza) => (
          <div className="card-container-second" key={pizza.id}>
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={pizza.img}
                  alt={pizza.name}
                  style={{
                    width: "640px",
                    height: "426px",
                    objectFit: "cover",
                  }}
                />

                <Card.Title>
                  Pizza{" "}
                  {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                </Card.Title>
                <p>
                  Precio:{" "}
                  {pizza.price.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </p>
                <ListGroup>
                  <ListGroupItem>
                    <div className="quantity-control">
                      <Button
                        variant="outline-dark"
                        onClick={() => decreaseQuantity(pizza.id)}
                        disabled={pizza.quantity === 0}
                      >
                        -
                      </Button>
                      <span>{pizza.quantity}</span>
                      <Button onClick={() => increaseQuantity(pizza.id)}>
                        +
                      </Button>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
      <h3>
        Total:{" "}
        {total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
      </h3>
    </div>
  );
}

export default Cart;
