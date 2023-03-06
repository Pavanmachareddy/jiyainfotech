import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid style={{ width: "100%", padding: "0px", margin: "0px" }}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Sidebar />
      <Footer />
    </Container>
  );
}

export default App;
