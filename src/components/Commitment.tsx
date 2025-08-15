import React from 'react';
import SectionHeader from './SectionHeader';

const Commitment: React.FC = () => {
  return (
    <section id="こだわり" className="py-32 md:py-48" style={{
      backgroundColor: '#2c2c2c',
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif"
    }}>
      <div className="container mx-auto px-8 max-w-6xl">
        <SectionHeader title="私たちのこだわり" subtitle="THE COMMITMENT" />
        <div className="grid md:grid-cols-3 gap-16 mt-24">
          
          {/* 自然の恵み */}
          <div style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '2rem'
          }}>
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&h=350&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="雲仙普賢岳の美しい自然風景" 
                className="w-full h-48 object-cover"
                style={{ filter: 'sepia(0.2) contrast(1.1) brightness(0.9)' }}
              />
            </div>
            <h3 className="text-2xl mb-6" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>自然の恵み</h3>
            <p className="leading-loose text-lg" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              雲仙普賢岳の麓、清らかな湧水。島原の豊かな自然が、そうめんの繊細な風味を育みます。
            </p>
          </div>

          {/* 伝統製法 */}
          <div style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '2rem'
          }}>
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1574177611022-9033fd48fc2c?q=80&w=500&h=350&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="天日干しされる手延べそうめん" 
                className="w-full h-48 object-cover"
                style={{ filter: 'sepia(0.2) contrast(1.1) brightness(0.9)' }}
              />
            </div>
            <h3 className="text-2xl mb-6" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>三十時間の伝統製法</h3>
            <p className="leading-loose text-lg" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              二昼夜、三十時間をかけてじっくりと仕上げる伝統製法。職人の勘と経験が生み出す至高の味。
            </p>
          </div>

          {/* 歴史 */}
          <div style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '2rem'
          }}>
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=500&h=350&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="伝統的な日本の建物" 
                className="w-full h-48 object-cover"
                style={{ filter: 'sepia(0.2) contrast(1.1) brightness(0.9)' }}
              />
            </div>
            <h3 className="text-2xl mb-6" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>四十年の歴史</h3>
            <p className="leading-loose text-lg" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              創業以来四十年間、手延べそうめん一筋。全国シェア30%の誇りと共に品質を追求します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;