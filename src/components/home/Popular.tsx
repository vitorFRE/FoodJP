import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreackPoints';
import ramen1 from '../../assets/ramen1.png';
import ramen2 from '../../assets/ramen2.png';
import ramen3 from '../../assets/ramen3.png';

export const Popular = () => {
  return (
    <Container>
      <h2>Mais populares</h2>
      <div>
        <ul>
          <li>
            <img src={ramen1} alt="ramen 1" />
          </li>
          <li>
            <h3>Ramen de Frango</h3>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <span>R$ 30</span>
          </li>
        </ul>
        <ul>
          <li>
            <img src={ramen2} alt="ramen 1" />
          </li>
          <li>
            <h3>Ramen Apimentado</h3>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <span>R$ 30</span>
          </li>
        </ul>
        <ul>
          <li>
            <img src={ramen3} alt="ramen 1" />
          </li>
          <li>
            <h3>Ramen Tradicional</h3>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <span>R$ 30</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.container}

  h2 {
    text-align: center;
    padding: 50px 0 100px 0;
    color: ${({ theme }) => theme.colors.Black};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    @media ${device.sm} {
      font-size: 24px;
    }
  }

  > div {
    margin-top: 54px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    @media ${device.md} {
      gap: 150px;
    }
    ul {
      border-radius: 32px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.White_200};
      max-width: 380px;
      height: 450px;
      position: relative;

      li:first-child {
        position: absolute;
        top: -100px;
        right: 10%;
      }

      h3 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        color: ${({ theme }) => theme.colors.Black};
        padding-top: 250px;
        @media ${device.sm} {
          font-size: 24px;
        }
      }

      p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        color: ${({ theme }) => theme.colors.Gray};
        padding: 16px 0 32px 0;
        @media ${device.sm} {
          font-size: 1rem;
        }
      }

      span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        color: ${({ theme }) => theme.colors.Black};
      }
    }
  }
`;
