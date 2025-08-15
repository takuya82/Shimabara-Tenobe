import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* 雲仙普賢岳の美しい背景画像 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&h=1080&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="雄大な日本の山々"
          className="w-full h-full object-cover"
          style={{ filter: 'contrast(110%) brightness(80%) saturate(105%)' }}
        />
      </div>
      
      {/* シンプルなオーバーレイ */}
      <div className="absolute inset-0 z-8 bg-slate-900 opacity-65"></div>
      
      {/* メインコンテンツ */}
      <div className="relative z-20 text-center p-8 max-w-7xl mx-auto">
        {/* 創業年数バッジ */}
        <div className="mb-8 inline-flex items-center bg-black bg-opacity-30 rounded-full px-6 py-2 backdrop-blur-sm">
          <span className="text-white text-sm font-medium">創業四十年 • ESTABLISHED 1984</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          
          {/* 縦書きメインロゴ */}
          <div className="flex flex-col items-center">
            <h1 className="font-master-craftsman text-7xl md:text-8xl lg:text-9xl leading-none mb-6" 
                style={{ 
                  writingMode: 'vertical-rl', 
                  textOrientation: 'upright',
                  fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  lineHeight: '0.85',
                  
                  /* シンプルで上品なスタイル */
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                }}>
              田中製麺所
            </h1>
            
            {/* シンプルな装飾線 */}
            <div className="w-1 h-24 bg-white opacity-60 rounded-sm"></div>
          </div>
          
          {/* 右側のコンテンツ */}
          <div className="text-left space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white" style={{
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: '500',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                letterSpacing: '0.05em'
              }}>
                四十年の伝統
                <br />
                島原手延べそうめん
              </h2>
            
            {/* シンプルな説明文 */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg text-white leading-relaxed">
                三代に渡る伝統技法で作られる<br />
                島原が誇る手延べそうめん
              </p>
            </div>
            
            {/* ナビゲーションボタン */}
            <div className="flex gap-6 pt-4">
              <button 
                onClick={() => scrollToSection('商品')}
                className="px-8 py-3 transition-all duration-300 hover:opacity-80" 
                style={{
                  backgroundColor: '#f5f5dc',
                  color: '#1a1a1a',
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: '500',
                  border: '1px solid #d4af37',
                  letterSpacing: '0.05em',
                  cursor: 'pointer'
                }}
              >
                商品を見る
              </button>
              <button 
                onClick={() => scrollToSection('こだわり')}
                className="px-8 py-3 transition-all duration-300 hover:opacity-80" 
                style={{
                  backgroundColor: '#f5f5dc',
                  color: '#1a1a1a',
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: '500',
                  border: '1px solid #d4af37',
                  letterSpacing: '0.05em',
                  cursor: 'pointer'
                }}
              >
                こだわり
              </button>
            </div>
          </div>
        </div>
        
        {/* シンプルなスクロール矢印 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white text-2xl animate-bounce">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;