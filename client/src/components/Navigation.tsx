import { useContext } from 'react';
import { LanguageContext } from '../main'; 
import { Link } from 'react-router-dom';


const Navigation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Navigation must be used within a LanguageProvider");
  }
  const { language, setLanguage } = context;

  // Log the value of language
  // console.log('Current language:', language);
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'   
   });
    }
  };

  return (
      <>
    <nav className='fixed-top d-flex flex-row justify-content-between align-items-start h-25'>
     {/* <img src={brush} className='brush-stroke col-12 col-lg-6 position-absolute' alt="" /> */}
     {/* LOGO */}
     <p onClick={() => scrollToElement('#')} className='logo m-1 m-lg-3 mx-lg-5'>{language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}</p>

    
     <div className="m-1 m-lg-3 mx-lg-5 d-flex gap-1 gap-lg-4 align-items-center">
      {/* FLEX-ROW NAV */}
      <div className='layed-navigation gap-3 d-none d-lg-flex my-auto'>
        <h4>
          <p onClick={() => scrollToElement(language === "hu" ? "rolam" : "ubermich")}>
            {language === "hu" ? "Rólam" : "Über mich"}
          </p>
        </h4>
        <h4>
          <p onClick={() => scrollToElement(language === "hu" ? "rajzok" : "zeichnungen")}>
            {language === "hu" ? "Rajzok" : "Zeichnungen"}
          </p>
        </h4>
        <h4>
          <p onClick={() => scrollToElement(language === "hu" ? "festmenyek" : "gemaelde")}>
            {language === "hu" ? "Festmények" : "Gemälde"}
          </p>
        </h4>
        <h4>  
          <p onClick={() => scrollToElement(language === "hu" ? "tetovalasok" : "taetowierungen")}>
            {language === "hu" ? "Tetoválások" : "Tätowierungen"}
          </p>
        </h4>
      </div>
      {/* LANG PICKER */}
      <div className='lang-pick d-flex align-items-center'>
        <p className='m-0' onClick={() => {setLanguage('de'); localStorage.setItem("lang", "de")}}>🇩🇪</p>{" "}/{" "}<p className='m-0' onClick={() => {setLanguage('hu'); localStorage.setItem("lang", "hu")}}>🇭🇺</p> 
      </div>

      {/* HAMBURGER */}
      <div className="me-3 hamburger d-block d-lg-none" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-list"></i> 
      </div>
      {/* DROPDOWN */}
      <ul className="dropdown-menu dropdown-menu-end text-end p-3">
          <li>
            <Link to={language === "hu" ? "#rolam" : "#ubermich"}>
              {language === "hu" ? "Rólam" : "Über mich"}
            </Link>
          </li>
          <li>
            <Link to={language === "hu" ? "#rajzok" : "#zeichnungen"}>
              {language === "hu" ? "Rajzok" : "Zeichnungen"}
            </Link>
          </li>
          <li>
            <Link to={language === "hu" ? "#festmenyek" : "#gemaelde"}>
              {language === "hu" ? "Festmények" : "Gemälde"}
            </Link>
          </li>
          <li>
            <Link to={language === "hu" ? "/tetovalasok" : "/taetowierungen"}>
              {language === "hu" ? "Tetoválások" : "Tätowierungen"}
            </Link>
          </li>
        </ul>
     </div>
    </nav>
    </>
  );
};

export default Navigation;