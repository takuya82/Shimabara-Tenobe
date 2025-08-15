import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1591382405999-66953b313e6a?q=80&w=1920&h=1080&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="涼しげな器に盛り付けられた島原手延べそうめん"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center p-6">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          匠の食卓
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-lg mx-auto drop-shadow-md">
          三十時間の結晶、一筋の芸術。
          <br />
          島原の恵みが織りなす、至高の味わいをご家庭へ。
        </p>
      </div>
    </section>
  );
};

export default Hero;