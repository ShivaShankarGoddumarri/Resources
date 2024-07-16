import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: calc(97.8vh - 60px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Adjust the gap between cards */
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 3px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  width: 90%;
  height: 100%
  max-width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  &:nth-child(1) {
      max-width: 800px; 
      height: 500px;
    }

    &:nth-child(2) {
      max-width: 300px; 
      height: 500px;

    }
  
  @media (min-width: 1024px) {
    max-width: 600px; 
  }
`;

const Title = styled.div`
  background-color: ${({ theme, type }) => type === 'primary' ? theme.primary : theme.secondary};
  border-radius: 10px;
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    &::before {
      content: '${({ type }) => type === 'primary' ? 'Primary Color' : 'Secondary Color'}';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.textColor};
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }
  }
`;

const Box = styled.div`
  background-color: ${({ theme, type }) => type === 'primary' ? theme.primary : theme.secondary};
  border-radius: 10px;
  height: ${(props) => props.height || "100px"}; 
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    &::before {
      content: '${({ type }) => type === 'primary' ? 'Primary Color' : 'Secondary Color'}';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.textColor};
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ColorPalette = () => {
  return (
    <Container>
      <Card>
        <Title type="secondary" height="20px" width="50%" />
        <Title type="primary" height="20px" width="70%" />
        <Box type="primary" height="120px" />
        <Grid>
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
        </Grid>
      </Card>
      <Card>
        <Title type="secondary" height="20px" width="50%" />
        <Title type="primary" height="20px" width="70%" />
        <Box type="primary" height="120px" />
        <Grid>
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
          <Box type="secondary" height="100px" />
        </Grid>
      </Card>
    </Container>
  );
};

export default ColorPalette;
