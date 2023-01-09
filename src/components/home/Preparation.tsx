import React from 'react';
import styled from 'styled-components';
import img from '../../assets/preparation.png';
import { device } from '../../styles/BreackPoints';

export const Preparation = () => {
  return (
    <Container>
      <img src={img} alt="Pessoa segurando prato" />

      <div>
        <h2>Feita de forma Tradicional</h2>
        <p>Chefs treinados preparam sushi fresco com técnicas tradicionais.</p>
        <a href="/">Ler mais sobre o modo de preparo </a>
      </div>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}

  display:grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 124px;
  margin-top: 100px;

  @media ${device.md} {
    grid-template-columns: 1fr;
    margin-top: 80px;
    gap: 40px;
    place-items: center;
    text-align: center;
  }

  h2 {
    color: ${({ theme }) => theme.colors.Black};
    padding-top: 84px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    @media ${device.sm} {
      font-size: 32px;
      padding-top: 0px;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.Black};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    padding-top: 24px;
    padding-bottom: 40px;
    @media ${device.sm} {
      font-size: 1rem;
      padding: 24px 0 32px 0;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.Primary};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-decoration-line: underline;
    @media ${device.sm} {
      font-size: 1rem;
    }
  }
`;
