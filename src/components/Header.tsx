import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/FoodJP.svg';
import Menu from '../assets/menu.svg';
import { device } from '../styles/BreackPoints';
import { VscChromeClose } from 'react-icons/vsc';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <a href="">
        <img
          src={Logo}
          alt="Logo do site"
          title="Logo"
          width={152}
          height={31}
        />
      </a>
      <Nav>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <VscChromeClose size={24} />
          ) : (
            <img src={Menu} alt="menu close" />
          )}
        </button>
        <ul style={{ display: isOpen ? 'flex' : '' }}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Cardápio</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
        {isOpen && <div className="menu-overlay" />}
      </Nav>

      <button>Entrar</button>
    </Container>
  );
};

const Container = styled.header`
  ${({ theme }) => theme.container}

  padding-top:40px;
  padding-bottom: 40px;

  display: flex;
  justify-content: space-between;

  > button {
    padding: 10px 58px;
    background-color: transparent;
    border: 2px solid #292929;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.Primary};
      color: ${({ theme }) => theme.colors.White};
      border-color: ${({ theme }) => theme.colors.White};
    }

    @media ${device.md} {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  .menu-overlay {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background-color: rgba(10, 0, 0, 0.4);
  }
  button {
    display: none;
    border: none;
    background-color: transparent;
    z-index: 9999;
    cursor: pointer;
    position: relative;
    @media ${device.sm} {
      display: block;
    }
  }
  ul {
    display: flex;
    gap: 80px;
    color: #292929;
    li {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;

      &:hover {
        color: ${({ theme }) => theme.colors.Gray};
      }
    }

    @media ${device.md} {
      gap: 40px;
    }

    @media ${device.sm} {
      display: none;
      z-index: 888;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      width: 60%;
      height: 100%;
      padding-top: 144px;
      padding-left: 24px;
      background-color: white;
      position: absolute;
      top: 0px;
      right: 0px;
      li {
        color: ${({ theme }) => theme.colors.Primary};
      }
    }
  }
`;
