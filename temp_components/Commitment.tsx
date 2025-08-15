import React from 'react';
import SectionHeader from './SectionHeader';

const Commitment: React.FC = () => {
  return (
    <section id="こだわり" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="私たちのこだわり" subtitle="THE COMMITMENT" />
        <div className="grid md:grid-cols-3 gap-12 mt-16 text-[#5E6C77]">
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1614066223964-18f7f16f9f1b?q=80&w=400&h=300&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="島原の豊かな自然、雲仙普賢岳の風景" className="mx-auto rounded-lg shadow-lg mb-6"/>
            <h3 className="text-2xl font-serif text-[#2A303C] mb-3">自然の恵み</h3>
            <p className="text-base leading-relaxed">
              雲仙普賢岳の麓、清らかな湧水。島原の豊かな自然が、そうめんの繊細な風味を育みます。私たちはこの土地の恵みに感謝し、その価値を最大限に引き出します。
            </p>
          </div>
          <div className="text-center">
             <img src="https://images.unsplash.com/photo-1623961954382-35364408a183?q=80&w=400&h=300&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="天日干しされる手延べそうめん" className="mx-auto rounded-lg shadow-lg mb-6"/>
            <h3 className="text-2xl font-serif text-[#2A303C] mb-3">三十時間の伝統製法</h3>
            <p className="text-base leading-relaxed">
              捏ね、延ばし、そして熟成へ。二昼夜、三十時間をかけてじっくりと仕上げる伝統製法。職人の勘と経験が、他にないコシと喉越しを生み出します。
            </p>
          </div>
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1582294132854-ce5250c37a6b?q=80&w=400&h=300&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="歴史を感じさせる日本の伝統的な店構え" className="mx-auto rounded-lg shadow-lg mb-6"/>
            <h3 className="text-2xl font-serif text-[#2A303C] mb-3">四十年の歴史</h3>
            <p className="text-base leading-relaxed">
              創業以来四十年間、私たちは手延べそうめん一筋に歩んできました。全国シェア30%という誇りを胸に、今日も最高の品質を追求し続けます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;