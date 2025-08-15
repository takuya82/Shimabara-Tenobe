import React from 'react';

const Header: React.FC = () => {
  const navItems = ['こだわり', '商品', '匠', '贈り物・贈答ご提案'];

  return (
    <header className="sticky top-0 z-50" style={{
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #666666'
    }}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold" style={{
          fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
          fontWeight: '600',
          letterSpacing: '0.08em',
          color: '#f5f5dc',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
        }}>
          田中製麺所
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-base font-medium relative group"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: '500',
                letterSpacing: '0.02em',
                color: '#f5f5dc',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                textDecoration: 'none'
              }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{
                backgroundColor: '#d4af37'
              }}></span>
            </a>
          ))}
          <button className="px-8 py-3" style={{
            backgroundColor: '#d4af37',
            color: '#1a1a1a',
            fontFamily: "'Noto Serif JP', serif",
            fontWeight: '500',
            border: '1px solid #d4af37',
            letterSpacing: '0.03em'
          }}>
            ご注文
          </button>
        </nav>
        <button className="md:hidden text-3xl" style={{
          color: '#f5f5dc',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
        }}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;