import { Col, Container, Row } from "react-bootstrap";

export default function AuthLayout({ children }) {
  return (
    <Container>
      AuthLayout
      <Row>
        <Col md={4}>{children}</Col>
      </Row>
    </Container>
  );
}
