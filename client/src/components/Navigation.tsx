import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../main'; 
import { Link, useLocation , useNavigate} from 'react-router-dom';


const Navigation = () => {
  const navigationRef = useRef<HTMLDivElement>(null);
  // const hamburgerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigation = useNavigate();

  const [home, setHome] = useState(() => () => scrollToElement('#'));

  const pathname = location.pathname;

  useEffect(() => {
    const hmElement = document.querySelector('.hamburger');
    const divElement = document.querySelector('.layed-navigation');
    const footer = document.querySelector('.kapcsolat');
    if(pathname === '/gallery') {      
      //Refs did not work...
      if (hmElement) {
        hmElement.classList.add('d-none');
        hmElement.classList.remove("d-block");
      }
      if (divElement) {
        divElement.classList.add('d-none');
        divElement.classList.remove("d-lg-flex");
      }
      if(footer) {
        footer.classList.remove('d-none');
        footer.classList.add('d-block');
      }
    
      
      setHome(() => () => navigation('/'));
    } else {
      if (hmElement) {
        hmElement.classList.remove('d-none');
        hmElement.classList.add("d-block");
      }
      if (divElement) {
        // divElement.classList.remove('d-none');
        divElement.classList.add("d-lg-flex");
      }
      if(footer) {
        footer.classList.remove('d-block');
        footer.classList.add('d-none');
      }
      setHome(() => () => scrollToElement('#'));
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <nav className='fixed-top d-flex flex-row justify-content-between align-items-start'>

      {/* LOGO */}
      <p onClick={home} className='logo m-1 m-lg-3 mx-lg-5'>{language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}</p>

      
      <div className="m-1 m-lg-3 mx-lg-5 d-flex gap-1 gap-lg-4 align-items-center">
        {/* FLEX-ROW NAV */}
        <div ref={navigationRef} className='layed-navigation gap-3 d-none d-lg-flex my-auto'>
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
          <h4>
            <Link to="/gallery">
              {language === "hu" ? "Galéria" : "Galerie"}                            
            </Link>
          </h4>
        </div>
        {/* Gallery
        <div className="me-3 ms-2 hamburger d-block d-lg-none" data-bs-toggle="dropdown" aria-expanded="false">
          {/* <i className="bi bi-list"></i>  
          <Link to="/gallery">
              {language === "hu" ? "Galéria" : "Galerie"}                            
            </Link>
        </div> 
        */}
        {/* LANG PICKER */}
        <div className='lang-pick d-flex align-items-center justify-content-center gap-2 mt-md-0'>
          <p className='m-1 hamburger d-block d-lg-none'>
            <Link to="/gallery">
              {language === "hu" ? "Galéria" : "Galerie"}                            
            </Link>
          </p>
          <p className='m-1 mx-1 mx-lg-4 kapcsolat d-none' onClick={() => scrollToElement("kapcsolat")}>{language === "hu" ? "Kapcsolat" : "Kontakt"}</p>
          <p className='m-0' onClick={() => {setLanguage('de'); localStorage.setItem("lang", "de")}}>🇩🇪</p>{" "}/{" "}<p className='m-0' onClick={() => {setLanguage('hu'); localStorage.setItem("lang", "hu")}}>🇭🇺</p> 
        </div>

        
        {/* DROPDOWN */}
        {/* <ul className="dropdown-menu dropdown-menu-end text-end p-3">
            <li>
              <p onClick={() => scrollToElement(language === "hu" ? "rolam" : "ubermich")}>
                {language === "hu" ? "Rólam" : "Über mich"}
              </p>
            </li>
            <li>
              <p onClick={() => scrollToElement(language === "hu" ? "rajzok" : "zeichnungen")}>
                {language === "hu" ? "Rajzok" : "Zeichnungen"}
              </p>
            </li>
            <li>
              <p onClick={() => scrollToElement(language === "hu" ? "festmenyek" : "gemaelde")}>
                {language === "hu" ? "Festmények" : "Gemälde"}
              </p>
            </li>
            <li>
              <p onClick={() => scrollToElement(language === "hu" ? "tetovalasok" : "taetowierungen")}>
                {language === "hu" ? "Tetoválások" : "Tätowierungen"}
              </p>
            </li>
            <li>
              <Link to="/gallery">
                {language === "hu" ? "Galéria" : "Galerie"}                            
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Navigation;