import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.navbar};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${({ theme }) => theme.colors.navbar};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }
`;

const NavLink = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <NavbarContainer>
      <Logo>
        503<span>LogisticaSV</span>
      </Logo>
      
      <NavLinks isOpen={isOpen}>
        <NavLink><a href="#inicio">Inicio</a></NavLink>
        <NavLink><a href="#servicios">Servicios</a></NavLink>
        <NavLink><a href="#flota">Flota</a></NavLink>
        <NavLink><a href="#contacto">Contacto</a></NavLink>
      </NavLinks>
      
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
      
      <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
    </NavbarContainer>
  );
};

export default Navbar;