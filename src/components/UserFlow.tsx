import React from 'react';
import SectionHeader from './SectionHeader';

const UserFlow: React.FC = () => {
  return (
    <section id="UserFlow" className="py-32 md:py-48" style={{
      backgroundColor: '#2c2c2c',
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif"
    }}>
      <div className="container mx-auto px-8 max-w-6xl">
        <SectionHeader title="ご注文の流れ" subtitle="ORDER FLOW" />
        
        <div className="grid md:grid-cols-3 gap-16 mt-24">
          <div className="text-center" style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '2rem'
          }}>
            <div className="text-3xl mb-6" style={{
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: '600',
              color: '#d4af37'
            }}>01</div>
            <h3 className="text-xl mb-4" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>商品選択</h3>
            <p style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              お好みの商品を
              お選びください
            </p>
          </div>
          
          <div className="text-center" style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '2rem'
          }}>
            <div className="text-3xl mb-6" style={{
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: '600',
              color: '#d4af37'
            }}>02</div>
            <h3 className="text-xl mb-4" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>ご注文</h3>
            <p style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              お電話または
              オンラインでご注文
            </p>
          </div>
          
          <div className="text-center" style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '2rem'
          }}>
            <div className="text-3xl mb-6" style={{
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: '600',
              color: '#d4af37'
            }}>03</div>
            <h3 className="text-xl mb-4" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>お届け</h3>
            <p style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              新鮮な状態で
              スピーディーにお届け
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlow;