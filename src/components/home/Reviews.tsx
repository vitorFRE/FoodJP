import React from 'react';
import styled from 'styled-components';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import estrelas from '../../assets/estrelas.svg';
import { device } from '../../styles/BreackPoints';

export const Reviews = () => {
  return (
    <Container>
      <h2>Comentarários</h2>
      <div>
        <ul>
          <li>
            <img src={profile1} alt="Profile" />
          </li>
          <li>
            <h3>Daniele Almeida</h3>
          </li>
          <li>
            <p>Ótimo serviço! Encantada com a qualidade dos pratos.</p>
          </li>
          <li>
            <img src={estrelas} alt="Estrelas" />
          </li>
        </ul>
        <ul>
          <li>
            <img src={profile2} alt="Profile" />
          </li>
          <li>
            <h3>Ricardo França</h3>
          </li>
          <li>
            <p>
              Não é apenas a comida excelente, o serviço torna a experiência
              especial.
            </p>
          </li>
          <li>
            <img src={estrelas} alt="Estrelas" />
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}
  h2 {
    padding: 100px 0 48px 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 123%;
    color: ${({ theme }) => theme.colors.Black};
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media ${device.md} {
      grid-template-columns: 1fr;
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  }

  ul {
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.White_200};
    li {
      &:nth-child(1) {
        padding: 41px 0 40px 24px;
      }
      h3 {
        padding: 0 0 16px 40px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 123%;
        color: ${({ theme }) => theme.colors.Black};
        @media ${device.md} {
          font-size: 18px;
        }
      }
      p {
        padding: 0 0 16px 40px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 160%;
        color: ${({ theme }) => theme.colors.Gray};
        @media ${device.md} {
          font-size: 16px;
          padding-left: 22px;
          padding-right: 22px;
        }
      }
      &:last-child {
        padding: 0 0 39px 40px;
      }
    }
  }
`;
