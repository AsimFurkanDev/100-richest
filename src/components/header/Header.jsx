import React from "react";
import Container from "react-bootstrap/Container";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <h1 className={`${headerStyle.title} mt-5`}>100 RICHEST PEOPLE</h1>
    </Container>
  );
};

export default Header;
