import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/home/Hero';
import { Localização } from '../../components/home/Localização';
import { Popular } from '../../components/home/Popular';
import { Preparation } from '../../components/home/Preparation';
import { Reviews } from '../../components/home/Reviews';

interface AppProps {
  // Props
}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <Header />
      <Hero />
      <Preparation />
      <Popular />
      <Reviews />
      <Localização />
      <Footer />
    </>
  );
};
