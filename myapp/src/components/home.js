import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';



const Home = () => {
    const foodData = [
        { id: 1, name: 'Pizza', image: 'https://example.com/pizza.jpg', price: '$12.1' },
        { id: 2, name: 'Burger', image: 'https://example.com/burger.jpg' , price: '$12.1'},
        { id: 3, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$10.1' },
        { id: 4, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$22.5' },
        { id: 5, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$100' },
        { id: 6, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$30.1' },
        { id: 7, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$12.1' },
        { id: 8, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$100' },
        { id: 9, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$30.1' },
        { id: 10, name: 'Sushi', image: 'https://example.com/sushi.jpg', price: '$12.1' },
        // Add more food items as needed
      ]; 
   

return(
<Container className="mt-5">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {foodData.map((food) => (
          <Col key={food.id}>
            <Card>
              <Card.Img variant="top" src={food.image} alt={food.name} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                {/* You can add additional details about the food here */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
</Container>
);
}

export default Home;