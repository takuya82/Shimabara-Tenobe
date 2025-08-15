import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2A303C]">{title}</h2>
      <p className="text-sm uppercase tracking-widest text-[#B89B72] mt-2 font-semibold">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;