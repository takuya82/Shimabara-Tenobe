import React from 'react';
import SectionHeader from './SectionHeader';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "極細手延べそうめん",
      subtitle: "PREMIUM THIN",
      price: "¥2,800",
      image: "https://images.unsplash.com/photo-1591382405999-66953b313e6a?q=80&w=600&h=400&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "極限まで細く延ばした至高の一品。絹のような滑らかさと繊細な味わい。",
      features: ["直径0.7mm", "30時間熟成", "限定生産"]
    },
    {
      id: 2,
      name: "伝統手延べそうめん",
      subtitle: "TRADITIONAL",
      price: "¥1,980",
      image: "https://images.unsplash.com/photo-1574177611022-9033fd48fc2c?q=80&w=600&h=400&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "四十年変わらぬ製法で作られる伝統の味。家族みんなで楽しめる定番商品。",
      features: ["昔ながらの製法", "コシの強さ", "毎日の食卓に"]
    },
    {
      id: 3,
      name: "ギフトセット",
      subtitle: "GIFT COLLECTION",
      price: "¥4,500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&h=400&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "大切な方への贈り物に。美しい桐箱に込めた島原の心と伝統の味わい。",
      features: ["桐箱入り", "のし対応", "ギフト包装"]
    }
  ];

  return (
    <section id="商品" className="py-32 md:py-48" style={{
      backgroundColor: '#1a1a1a',
      fontFamily: "'Noto Serif JP', 'Times New Roman', serif"
    }}>
      <div className="container mx-auto px-8 max-w-6xl">
        <SectionHeader title="商品ラインナップ" subtitle="OUR PRODUCTS" />

        <div className="grid md:grid-cols-3 gap-16 mt-24">
          {products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: '#f5f5dc',
              border: '1px solid #d4af37',
              padding: '2rem'
            }}>
              {/* 画像部分 */}
              <div className="mb-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  style={{ filter: 'sepia(0.2) contrast(1.1) brightness(0.9)' }}
                />
                
                {/* 価格 */}
                <div className="mt-4 text-right">
                  <span className="text-2xl" style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: '600',
                    color: '#d4af37',
                    letterSpacing: '0.05em'
                  }}>
                    {product.price}
                  </span>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div>
                <p className="text-sm uppercase tracking-widest mb-4" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#d4af37',
                  letterSpacing: '0.15em'
                }}>
                  {product.subtitle}
                </p>
                
                <h3 className="text-2xl mb-6" style={{
                  fontFamily: "'Noto Serif JP', 'Times New Roman', serif",
                  fontWeight: '600',
                  color: '#1a1a1a',
                  letterSpacing: '0.05em'
                }}>
                  {product.name}
                </h3>

                <p className="leading-loose text-lg mb-8" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: '#333333',
                  letterSpacing: '0.02em',
                  lineHeight: '1.8'
                }}>
                  {product.description}
                </p>

                {/* 特徴 */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center" style={{
                        fontFamily: "'Noto Serif JP', serif",
                        color: '#666666',
                        fontSize: '0.95rem'
                      }}>
                        <div className="w-1 h-1 mr-4" style={{
                          backgroundColor: '#d4af37'
                        }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ボタン */}
                <button className="w-full py-4" style={{
                  backgroundColor: '#1a1a1a',
                  color: '#f5f5dc',
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: '500',
                  border: '1px solid #d4af37',
                  letterSpacing: '0.05em'
                }}>
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="px-16 py-4" style={{
            backgroundColor: '#d4af37',
            color: '#1a1a1a',
            fontFamily: "'Noto Serif JP', serif",
            fontWeight: '600',
            border: '1px solid #d4af37',
            letterSpacing: '0.05em',
            fontSize: '1.1rem'
          }}>
            オンラインストアで購入
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;