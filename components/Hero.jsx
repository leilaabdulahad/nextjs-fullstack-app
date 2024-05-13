import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">LektionsMaterial</h1>
            <h2>För lärare av lärare</h2>
            <p className="text-lg md:text-xl mb-8">Här hittar du en samling av högkvalitativt läromedel för dina lektioner. Vi strävar efter att erbjuda det bästa innehållet för att stödja dig i ditt arbete som lärare.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-semibold transition-colors">Läs mer</button>
          </div>
          <div className="md:justify-self-end">
            <img src="/your-image.jpg" alt="Hero" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
