import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-20">
      <div className="inline-block">
        <p className="text-sm uppercase tracking-widest mb-6" style={{
          fontFamily: "'Noto Serif JP', serif",
          color: '#d4af37',
          letterSpacing: '0.15em',
          fontWeight: '400'
        }}>{subtitle}</p>
        <h2 className="text-4xl md:text-5xl mb-8" style={{
          fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
          fontWeight: '600',
          color: '#f5f5dc',
          letterSpacing: '0.05em',
          lineHeight: '1.3'
        }}>{title}</h2>
        <div className="w-16 h-px mx-auto" style={{
          backgroundColor: '#d4af37'
        }}></div>
      </div>
    </div>
  );
};

export default SectionHeader;