import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Courier New", Courier, monospace;
  color: #123abc;
  font-style: italic;
`;
const Home = () => (
  <div>
    <Title>This is home</Title>
  </div>
);
export default Home;
