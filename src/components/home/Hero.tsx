import React from 'react';
import styled from 'styled-components';
import main_img from '../../assets/main_img.png';
import { device } from '../../styles/BreackPoints';

export const Hero = () => {
  return (
    <Container>
      <div className="main_text">
        <h2>Comida Oriental</h2>
        <p>
          A culinária Japonesa é bastante equilibrada, sendo muito rica em
          peixes (ômega 3), vegetais, massas e ingredientes frescos.
        </p>
        <button>Cardápio</button>
      </div>
      <div className="main_img">
        <img src={main_img} alt="Sushi" />
      </div>
    </Container>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.container}
  padding-top:60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.sm} {
    padding-top: 16px;
  }

  .main_text {
    h2 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 59px;
      @media ${device.sm} {
        font-size: 32px;
      }
    }
    p {
      max-width: 520px;
      padding: 24px 0 48px 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 160%;
      @media ${device.sm} {
        font-size: 1rem;
        padding: 24px 0 32px 0;
      }
    }
    button {
      color: ${({ theme }) => theme.colors.White};
      background-color: ${({ theme }) => theme.colors.Primary};
      border-radius: 10px;
      border: none;
      padding: 15px 90px;
      cursor: pointer;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.Black};
      }
    }
  }

  .main_img {
    @media ${device.sm} {
      display: none;
    }
  }
`;
