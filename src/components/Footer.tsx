import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/BreackPoints';

export const Footer = () => {
  return (
    <Container>
      <h1>
        Food<span>JP</span>
      </h1>

      <FooterNav>
        <ul>
          <li>Contato</li>
          <li>
            <a href="/">+55 21 9999-9999</a>
          </li>
          <li>
            <a href="/">email@gmail.com</a>
          </li>
        </ul>
        <ul>
          <li>Sobre nós</li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Valores</a>
          </li>
          <li>
            <a href="/">Pagina principal</a>
          </li>
        </ul>
        <ul>
          <li>Serviços</li>
          <li>
            <a href="/">Entrega</a>
          </li>
          <li>
            <a href="/">Retirada</a>
          </li>
        </ul>
      </FooterNav>
    </Container>
  );
};

const Container = styled.footer`
  ${({ theme }) => theme.container}

  display: flex;
  flex-wrap: wrap;
  align-items: top;
  gap: 51px;

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    span {
      color: ${({ theme }) => theme.colors.Primary};
    }
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 150px;

  @media ${device.sm} {
    gap: 50px;
  }

  ul {
    color: ${({ theme }) => theme.colors.Gray};
    li {
      padding-bottom: 8px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;

      &:hover {
        color: ${({ theme }) => theme.colors.Primary};
      }

      &:first-child {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 123%;
        color: ${({ theme }) => theme.colors.Black};
      }
    }
  }
`;
