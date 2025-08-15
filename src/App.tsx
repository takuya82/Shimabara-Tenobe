import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import Products from './components/Products';
import Artisan from './components/Artisan';
import DesignProposal from './components/DesignProposal';
import UserFlow from './components/UserFlow';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div style={{
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
      backgroundColor: '#1a1a1a',
      color: '#f5f5dc',
      minHeight: '100vh'
    }}>
      <Header />
      <Hero />
      <Commitment />
      <Products />
      <Artisan />
      <DesignProposal />
      <UserFlow />
      <Footer />
    </div>
  );
};

export default App;