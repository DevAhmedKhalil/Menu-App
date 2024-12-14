import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
