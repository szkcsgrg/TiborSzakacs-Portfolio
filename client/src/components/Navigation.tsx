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

  return (
    <nav className='fixed-top d-flex flex-row justify-content-between'>
     {/* <img src={brush} className='brush-stroke col-12 col-lg-6 position-absolute' alt="" /> */}
     <Link to="/" className='logo m-1 m-lg-3 mx-lg-5'>{language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}</Link>

     <div className="m-1 m-lg-3 mx-lg-5 d-flex gap-4 align-items-center">
        <div className='lang-pick d-flex align-items-center'>
         <p className='m-0' onClick={() => {setLanguage('de'); localStorage.setItem("lang", "de")}}>🇩🇪</p>{" "}/{" "}<p className='m-0' onClick={() => {setLanguage('hu'); localStorage.setItem("lang", "hu")}}>🇭🇺</p> 
        </div>
        <div className="hamburger d-block d-lg-none" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-list"></i> 
        </div>

        <ul className="dropdown-menu dropdown-menu-end text-end p-3">
          <li>
            <Link to={language === "hu" ? "/rolam" : "#ubermich"}>
              {language === "hu" ? "Rólam" : "Über mich"}
            </Link>
          </li>
          <li>
            <Link to={language === "hu" ? "/rajzok" : "/zeichnungen"}>
              {language === "hu" ? "Rajzok" : "Zeichnungen"}
            </Link>
          </li>
          <li>
            <Link to={language === "hu" ? "/festmenyek" : "/gemaelde"}>
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

     {/* <div className='d-none d-lg-flex navlinks'>
        <p>Rajzok</p>
        <p>Falfestmenyek</p>
        <p>Festmenyek</p>
        <p>Tetovalasok</p>
     </div> */}
    </nav>
  );
};

export default Navigation;