import React from 'react';
import { Header } from '../../components/Header';
import { Hero } from '../../components/home/Hero';
import { Preparation } from '../../components/home/Preparation';

interface AppProps {
  // Props
}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <Header />
      <Hero />
      <Preparation />
    </>
  );
};
