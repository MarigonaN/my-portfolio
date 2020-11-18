import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Technologies() {
  return (
    <Container>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>
        Technologies I have used
      </h1>
      <hr></hr>
      <Row
        style={{
          display: "inline-flex",
          marginTop: "15%",
          marginBottom: "5%",
        }}
      >
        <Col xs={12} md={3} style={{ marginLeft: "10%" }}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png"
            style={{ width: "250px" }}
          />
        </Col>
        <Col xs={12} md={3} style={{ marginLeft: "5%" }}>
          <img
            src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png"
            style={{ width: "300px" }}
          />
        </Col>
        <Col xs={12} md={3} style={{ marginLeft: "5%" }}>
          <img
            src="https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png"
            style={{ width: "250px" }}
          />
        </Col>
        <Col xs={12} md={3} style={{ marginLeft: "5%" }}>
          <img
            src="https://www.pngkit.com/png/full/66-667065_js-club-new-balance-png-logo-node-js.png"
            style={{ width: "250px" }}
          />
        </Col>
      </Row>
      <Row
        style={{
          display: "inline-flex",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Col xs={12} md={4} style={{ marginLeft: "20%" }}>
          <img
            src="https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png"
            style={{ width: "250px" }}
          />
        </Col>
        <Col xs={12} md={4} style={{ marginLeft: "5%" }}>
          <img
            src="https://www.pngrepo.com/png/303263/180/css3-logo.png"
            style={{ width: "250px" }}
          />
        </Col>
        <Col xs={12} md={4} style={{ marginLeft: "5%" }}>
          <img
            src="https://i1.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?fit=587%2C330&ssl=1"
            style={{ width: "300px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Technologies;
