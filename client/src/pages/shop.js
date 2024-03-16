import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import Row from "react-bootstrap/Row";

const Shop = () => {
    return (
        <Container>
          <Row className="mt-2">
              <Col md={3}>
                  <TypeBar/>
              </Col>
              <Col md={9}>

              </Col>
          </Row>
        </Container>
    );
};

export default Shop;