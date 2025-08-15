import React from 'react';
import SectionHeader from './SectionHeader';

const DesignProposal: React.FC = () => {
  return (
    <section id="贈り物・贈答ご提案" className="py-32 md:py-48" style={{
      backgroundColor: '#1a1a1a',
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif"
    }}>
      <div className="container mx-auto px-8 max-w-6xl">
        <SectionHeader title="贈り物・贈答ご提案" subtitle="GIFT PROPOSAL" />
        
        <div className="text-center mt-24">
          <div style={{
            backgroundColor: '#f5f5dc',
            border: '1px solid #d4af37',
            padding: '3rem'
          }}>
            <p className="text-2xl mb-6" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}>
              お客様のご要望に合わせた<br />
              特別なデザインをご提案いたします
            </p>
            <p className="text-lg" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#333333',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              貴社のブランドイメージに合わせたオリジナルパッケージや<br />
              特別なギフトセットのデザインを承っております。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProposal;