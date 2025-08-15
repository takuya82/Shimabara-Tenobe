import React from 'react';

const Header: React.FC = () => {
  const navItems = ['こだわり', '商品', '匠', 'デザイン提案'];
  return (
    <header className="sticky top-0 bg-[#F8F5F0]/80 backdrop-blur-md z-50 border-b border-[#B89B72]/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-[#2A303C]">
          島原そうめん<span className="text-[#B89B72]">匠</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="text-base text-[#5E6C77] hover:text-[#B89B72] transition-colors duration-300 font-medium">
              {item}
            </a>
          ))}
          <button className="bg-[#2A303C] text-white px-6 py-2 rounded-full hover:bg-[#5E6C77] transition-colors duration-300 text-sm font-bold">
            オンラインストア
          </button>
        </nav>
        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;