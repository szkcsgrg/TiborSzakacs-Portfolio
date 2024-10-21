import React from 'react';

interface LanguageSelectionProps {
  setLanguage: (language: string) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ setLanguage }) => {
  return (
    <section className='container-fluid dark background'>
        <div className='language-picker d-flex flex-column justify-content-center align-items-center gap-1'>
            <h2 className='text-center my-3 my-lg-5'>Válasszon nyelvet / <br className='d-block d-lg-none' /> Wählen Sie Ihre Sprache </h2>
            <button className='lang-op col-6 col-lg-3' onClick={() => {setLanguage('hu'); localStorage.setItem("lang", "hu")}}>🇭🇺 Hungarian</button>
            <button className='lang-op col-6 col-lg-3' onClick={() => {setLanguage('de'); localStorage.setItem("lang", "de")}}>🇩🇪 German</button>
        </div>
    </section>
  );
};

export default LanguageSelection;
