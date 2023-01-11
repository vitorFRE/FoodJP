import React from 'react';
import styled from 'styled-components';
import mapa from '../../assets/mapa.png';
import mapamobile from '../../assets/mapamobile.png';
import pin from '../../assets/pin.svg';
import { device } from '../../styles/BreackPoints';

export const Localização = () => {
  return (
    <Container>
      <h2>Localização</h2>

      <picture>
        <source srcSet={mapamobile} media="(max-width: 400px)" />
        <img src={mapa} alt="Mapa" />
      </picture>

      <div>
        <input
          placeholder="Localização para entrega"
          type="text"
          name="loc"
          id="loc"
        />
        <button>Buscar</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.container}

  h2 {
    padding: 100px 0 48px 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 123%;
    @media ${device.sm} {
      font-size: 24px;
    }
  }

  div {
    padding-top: 56px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    input {
      width: 100%;
      max-width: 630px;
      border: 1px solid ${({ theme }) => theme.colors.Black};
      padding-top: 20px;
      padding-bottom: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 123%;
      border-radius: 10px 0px 0px 10px;

      padding-left: 60px;
      background: url(${pin}) no-repeat left;
      background-position: 20px 20px;

      @media ${device.sm} {
        font-size: 12px;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 50px;
        background-size: 20px;
        background-position: 20px 14px;
      }
    }

    button {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 123%;

      background-color: ${({ theme }) => theme.colors.Primary};
      color: ${({ theme }) => theme.colors.White};
      border: none;
      padding: 20px 52px;
      border-radius: 0px 10px 10px 0px;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.Black};
      }
      @media ${device.sm} {
        padding: 10px 15px;
      }
    }
  }
`;
