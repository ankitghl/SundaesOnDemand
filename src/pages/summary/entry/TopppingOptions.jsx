import Col from "react-bootstrap/Col";

export default function ToppingOptions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} stype={{ textAlign: "center" }}>
      <div>
        <img src={`http:localhost:3030/${imagePath}`} alt={`${name} topping`} />
      </div>
    </Col>
  );
}
