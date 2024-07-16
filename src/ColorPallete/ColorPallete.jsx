import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: calc(97.8vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 3px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  width: 90%;
  max-width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title1 = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    &::before {
      content: 'Secondary Color';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) =>
        theme.background}; /* Adjust as needed */
      color: ${({ theme }) => theme.textColor}; /* Adjust as needed */
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }

  }
`;

const Title2 = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    cursor: pointer;
    &::before {
      content: 'Primary Color';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) =>
        theme.background}; /* Adjust as needed */
      color: ${({ theme }) => theme.textColor}; /* Adjust as needed */
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }
  }
`;

const PrimaryBox = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  height: ${(props) => props.height || "120px"}; 
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    cursor: pointer;
    &::before {
      content: 'Primary Color';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) =>
        theme.background}; /* Adjust as needed */
      color: ${({ theme }) => theme.textColor}; /* Adjust as needed */
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }
  }
`;

const SecondaryBox1 = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  height: ${(props) => props.height || "100px"}; 
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    &::before {
      content: 'Secondary Color';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) =>
        theme.background}; /* Adjust as needed */
      color: ${({ theme }) => theme.textColor}; /* Adjust as needed */
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
    }
  }
`;

const SecondaryBox2 = styled.div`
  background-color: ${({ theme }) => theme.secondary}; 
  border-radius: 10px;
  height: ${(props) => props.height || "100px"}; 
  width: ${(props) => props.width || "100%"};
  position: relative;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    &::before {
      content: 'Secondary Color';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) =>
        theme.background}; /* Adjust as needed */
      color: ${({ theme }) => theme.textColor}; /* Adjust as needed */
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

const ColorPallete = () => {
  return (
    <Container>
      <Card>
        <Title1 height="20px" width="50%" />
        <Title2 height="20px" width="70%" />
        <PrimaryBox height="120px" />
        <Grid>
          <SecondaryBox1 height="100px" />
          <SecondaryBox2 height="100px" />
        </Grid>
      </Card>
    </Container>
  );
};

export default ColorPallete;
