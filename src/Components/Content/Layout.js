import React from "react";
import styled from "styled-components";
import BarInicial from "../Bars/BarInicial";

const BodyContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  /* background-color: #222629; */
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.8; */
`;

const Layout = (props) => {
  return (
    <>
      <BarInicial />
      <BodyContainer>{props.children}</BodyContainer>
    </>
  );
};

export default Layout;
