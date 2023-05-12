import React from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png';

export default function Header(props) {
  const { status = "active" } = props;
  const navigate = useNavigate();
  return (
    <Row justify="space-between">
      <Col className="header-logo"><img src={logo} alt="logo" onClick={() => {navigate("/")}} /></Col>
      <Col>
        <Row gutter={8} align="middle">
          <Col><div className={`status ${status}`}></div></Col>
          <Col className="node">Node {status}</Col>
        </Row>
      </Col>
    </Row>
  )
}
