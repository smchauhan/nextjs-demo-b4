import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Container fluid>
      DashboardLayout
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>{children}</Col>
      </Row>
    </Container>
  );
}
