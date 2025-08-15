import React from 'react';
import SectionHeader from './SectionHeader';

const Artisan: React.FC = () => {
  return (
    <section id="匠" className="py-32 md:py-48" style={{
      backgroundColor: '#2c2c2c',
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif"
    }}>
      <div className="container mx-auto px-8 max-w-6xl">
        <SectionHeader title="三代継承の匠技" subtitle="MASTER CRAFTSMAN" />
        
        <div className="flex flex-col lg:flex-row items-center gap-20 mt-24">
          
          {/* 左側：職人の写真 */}
          <div className="lg:w-1/2">
            <div style={{
              backgroundColor: '#f5f5dc',
              border: '1px solid #cccccc',
              padding: '2rem'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1529618160092-2f8ccc8e3244?q=80&w=600&h=700&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="三代目職人 田中一郎"
                className="w-full h-96 object-cover mb-8"
                style={{ filter: 'sepia(0.2) contrast(1.1) brightness(0.9)' }}
              />
              
              <h3 className="text-2xl mb-3" style={{
                fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
                fontWeight: '600',
                color: '#1a1a1a',
                letterSpacing: '0.05em'
              }}>三代目職人長</h3>
              <p className="text-xl mb-2" style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#1a1a1a',
                fontWeight: '500'
              }}>田中 一郎</p>
              <p className="text-sm" style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#888888',
                letterSpacing: '0.02em'
              }}>Master Craftsman</p>
            </div>
          </div>

          {/* 右側：コンテンツ */}
          <div className="lg:w-1/2 space-y-12">
            
            {/* 職人の紹介 */}
            <div style={{
              backgroundColor: '#f5f5dc',
              border: '1px solid #cccccc',
              padding: '2rem'
            }}>
              <h4 className="text-xl mb-6" style={{
                fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
                fontWeight: '600',
                color: '#1a1a1a',
                letterSpacing: '0.05em'
              }}>職人の経歴</h4>
              <p className="leading-loose mb-4" style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#333333',
                letterSpacing: '0.02em',
                lineHeight: '1.8'
              }}>
                厚生労働省認定職人、島原手延べそうめん組合理事長。
                伝統工芸士認定、食品衛生管理者資格保持。
              </p>
              <p className="leading-loose" style={{
                fontFamily: "'Noto Serif JP', serif",
                color: '#333333',
                letterSpacing: '0.02em',
                lineHeight: '1.8'
              }}>
                昭和五十九年創業以来、変わらぬ伝統製法と革新への挑戦。
                三代に渡り受け継がれる匠の技が生み出す最高級手延べそうめん。
              </p>
            </div>

            {/* 品質管理 */}
            <div style={{
              backgroundColor: '#f5f5dc',
              border: '1px solid #cccccc',
              padding: '2rem'
            }}>
              <h4 className="text-xl mb-6" style={{
                fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
                fontWeight: '600',
                color: '#1a1a1a',
                letterSpacing: '0.05em'
              }}>品質へのこだわり</h4>
              <div className="space-y-4">
                <p style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333',
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  marginBottom: '1rem'
                }}>
                  国際品質基準ISO22000に準拠した衛生管理システム
                </p>
                <p style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333',
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  marginBottom: '1rem'
                }}>
                  明治時代から続く手延べ製法を現代に継承
                </p>
                <p style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333',
                  letterSpacing: '0.02em',
                  lineHeight: '1.8'
                }}>
                  お客様満足度98.7%、リピート率95%以上
                </p>
              </div>
            </div>

            {/* 実績統計 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4" style={{
                backgroundColor: '#f5f5dc',
                border: '1px solid #cccccc'
              }}>
                <div className="text-3xl mb-2" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>40</div>
                <div className="text-sm" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333'
                }}>年の伝統</div>
              </div>
              <div className="text-center p-4" style={{
                backgroundColor: '#f5f5dc',
                border: '1px solid #cccccc'
              }}>
                <div className="text-3xl mb-2" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>30</div>
                <div className="text-sm" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333'
                }}>時間製法</div>
              </div>
              <div className="text-center p-4" style={{
                backgroundColor: '#f5f5dc',
                border: '1px solid #cccccc'
              }}>
                <div className="text-3xl mb-2" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>98.7</div>
                <div className="text-sm" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333'
                }}>%満足度</div>
              </div>
            </div>
          </div>
        </div>

        {/* 職人の言葉 */}
        <div className="mt-24 text-center">
          <div style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #666666',
            padding: '3rem'
          }}>
            <p className="text-2xl md:text-3xl mb-6" style={{
              fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
              fontWeight: '600',
              color: '#f5f5dc',
              letterSpacing: '0.05em',
              lineHeight: '1.5'
            }}>
              四十年間、変わらぬ想いで<br />
              一本一本に魂を込めて。<br />
              それが田中製麺所の誇りです。
            </p>
            <p className="text-lg" style={{
              fontFamily: "'Noto Serif JP', serif",
              color: '#cccccc',
              fontWeight: '400',
              letterSpacing: '0.03em'
            }}>- 三代目職人長 田中一郎</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artisan;