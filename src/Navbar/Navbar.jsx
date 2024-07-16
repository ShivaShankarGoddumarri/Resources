// src/Navbar.js

import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navBackground};
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <Nav>
      <NavTitle>Color Pallete</NavTitle>
      <ThemeButton onClick={toggleTheme}>
         {theme === 'dark' ? 'Light' : 'Dark'}
      </ThemeButton>
    </Nav>
  );
};

export default Navbar;
