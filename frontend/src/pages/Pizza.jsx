import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Pizza = () => {
  const [infor, setInfor] = useState(null);
  const [error, setError] = useState(false);

  // Función para consumir API

  const url = "http://localhost:5001/api/pizzas/p001";

  const getData = async () => {
   
      const response = await fetch(url);
    const data = await response.json();
    setInfor(data);
  };
  

  useEffect(()=> {
    getData();

  },[])


 
  if (error) {
    return <p>Error al cargar los datos de la pizza.</p>;
  }

  // Renderizar solo si los datos están cargados
  if (!infor || !infor.ingredients) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={infor.img} />
          <Card.Body>
            <Card.Title>{infor.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>INGREDIENTES:</Card.Text>
              <Card.Text>{infor.desc}</Card.Text>
              <ul>
                {infor.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Title>PRECIO: {infor.price}</Card.Title>
              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={() => console.log('Ver más')}>Ver más 👀</Button>
                <Button variant="dark" onClick={() => console.log('Añadir al carrito')}>Añadir 🛒</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default Pizza;
