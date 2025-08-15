import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20" style={{
      backgroundColor: '#1a1a1a',
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif"
    }}>
      <div className="container mx-auto px-8 max-w-6xl">
        
        {/* メインフッターコンテンツ */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          
          {/* ブランド情報 */}
          <div>
            <h3 className="text-3xl mb-4" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#f5f5dc',
              letterSpacing: '0.05em'
            }}>
              田中製麺所
            </h3>
            <p className="text-lg mb-6" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#d4af37',
              fontWeight: '500'
            }}>
              TANAKA SEIMENJO
            </p>
            
            <p className="leading-loose mb-8" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#cccccc',
              letterSpacing: '0.02em',
              lineHeight: '1.8'
            }}>
              島原の清らかな水と伝統の技法が生み出す極上の手延べそうめん。
              四十年間変わらぬ品質へのこだわりを全国のお客様にお届けしております。
            </p>
          </div>

          {/* 商品情報 */}
          <div>
            <h4 className="text-xl mb-8" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#d4af37',
              letterSpacing: '0.05em'
            }}>商品情報</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#cccccc',
                  textDecoration: 'none'
                }}>
                  <div className="w-1 h-1 mr-4" style={{
                    backgroundColor: '#d4af37'
                  }}></div>
                  極細手延べそうめん
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#cccccc',
                  textDecoration: 'none'
                }}>
                  <div className="w-1 h-1 mr-4" style={{
                    backgroundColor: '#d4af37'
                  }}></div>
                  伝統手延べそうめん
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#cccccc',
                  textDecoration: 'none'
                }}>
                  <div className="w-1 h-1 mr-4" style={{
                    backgroundColor: '#d4af37'
                  }}></div>
                  ギフトセット
                </a>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h4 className="text-xl mb-8" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#d4af37',
              letterSpacing: '0.05em'
            }}>会社情報</h4>
            <div className="space-y-4">
              <p style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#cccccc',
                letterSpacing: '0.02em',
                lineHeight: '1.6'
              }}>
                〒855-0801<br />
                長崎県島原市高島二丁目7217
              </p>
              <p style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#cccccc',
                letterSpacing: '0.02em'
              }}>
                TEL: 0957-62-8888
              </p>
              <p style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#d4af37',
                fontSize: '0.9rem'
              }}>
                平日 9:00-17:00
              </p>
            </div>
          </div>
        </div>

        {/* 区切り線とコピーライト */}
        <div className="border-t pt-8" style={{
          borderColor: '#d4af37'
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-4 md:mb-0">
              <p className="text-center md:text-left" style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#cccccc',
                fontSize: '0.9rem'
              }}>
                © 2024 田中製麺所 - 三代継承の匠技
              </p>
              <p className="text-center md:text-left" style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#999999',
                fontSize: '0.8rem'
              }}>
                創業四十年の伝統と信頼
              </p>
            </div>

            <div className="text-center">
              <p style={{
                fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
                color: '#d4af37',
                fontWeight: '500',
                letterSpacing: '0.05em'
              }}>
                匠の技、心を込めて
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;