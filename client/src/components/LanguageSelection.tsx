import React from 'react';

interface LanguageSelectionProps {
  setLanguage: (language: string) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ setLanguage }) => {
  return (
    <section className='container-fluid dark background'>
        <div className='language-picker d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-center my-3 my-lg-5'>Válasszon nyelvet / <br className='d-block d-lg-none' /> Wählen Sie Ihre Sprache </h2>
            <div className='d-flex justify-content-center gap-3 w-100'>
              <button className='lang-op col-5 col-lg-4' onClick={() => {setLanguage('hu'); localStorage.setItem("lang", "hu")}}>🇭🇺 Hungarian</button>
              <button className='lang-op col-5 col-lg-4' onClick={() => {setLanguage('de'); localStorage.setItem("lang", "de")}}>🇩🇪 German</button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default LanguageSelection;
