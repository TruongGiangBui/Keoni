import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CreateContent from "./components/pages/CreateContent";
import Home from "./components/pages/Home";
import GetInspired from "./components/pages/GetInspired";
import ManageCreations from "./components/pages/ManageCreations";
import HireSEOSpecialist from "./components/pages/HireSEOSpecialist";
import Configure from "./components/pages/Configure";
import "./assets/App.css";

const App: React.FC = () => {
  const resizeObserverLoopErr = function () {};
  window.addEventListener("error", (e) => {
    console.log("e.message", e.message);
    if (
      e.message ===
      "ResizeObserver loop completed with undelivered notifications."
    ) {
      e.stopImmediatePropagation();
    }
  });
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={3} className="sidebar-column">
            <Sidebar />
          </Col>
          <Col xs={9} className="content-column">
            <Navbar></Navbar>
            <Routes>
              <Route path="/create-content" element={<CreateContent />} />
              <Route path="/home" element={<Home />} />
              <Route path="/get-inspired" element={<GetInspired />} />
              <Route path="/manage-creations" element={<ManageCreations />} />
              <Route
                path="/hire-seo-specialist"
                element={<HireSEOSpecialist />}
              />
              <Route path="/configure" element={<Configure />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
