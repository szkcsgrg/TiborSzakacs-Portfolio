import { useContext } from 'react';
import { LanguageContext } from '../main'; 
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const oneletraj = "https://vps.szakacsgergo.com:8802/public/oneletrajz.pdf";
    const lebenslauf = "https://vps.szakacsgergo.com:8802/public/lebenslauf.pdf";

    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("Navigation must be used within a LanguageProvider");
    }
    const { language } = context;

    const scrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const year = Date().split(" ")[3];


    const location = useLocation();

    const pathname = location.pathname;


    return (
        <footer className='d-flex flex-column justify-content-center pt-5' id='kapcsolat'>
            <div className='d-flex flex-column flex-lg-row gap-2 justify-content-evenly'>
                <div className='footer-left text'>
                    <h5>
                        {pathname === '/gallery' ? (
                            <Link to="/">
                                {language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}
                            </Link>
                        ) : (
                            <p onClick={() => scrollToElement("#")}>{language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}</p>
                        )}
                    </h5>
                    <h5>
                        <p>
                            <a href="mailto:kontakt@tiborszakacs.com">kontakt@tiborszakacs.com</a>
                        </p>
                    </h5>
                    <h5>
                        <p>
                            <a href={language === "hu" ? "tel:+36706149575" : "tel:+4368181190760"}>{language === "hu" ? "+36 70 614 9575" : "+43 681 8119 0760"}</a>
                        </p>
                    </h5>
                    <h5>
                        <p>
                            <Link to={language === "hu" ? oneletraj : lebenslauf}>{language === "hu" ? "Önéletrajz" : "Lebenslauf"}</Link>
                        </p>
                    </h5>
                </div>
                <hr  className='d-block d-md-none'/>
                <div className='footer-right text'>
                    <h5>
                        {pathname === '/gallery' ? (
                            <p onClick={() => scrollToElement("#")}>{language === "hu" ? "Galéria" : "Galerie"} </p>
                        ) : (
                            <Link to='/gallery'>
                                {language === "hu" ? "Galéria" : "Galerie"}                            
                            </Link>
                        )}
                    </h5>
                    <h5>
                        {pathname === '/gallery' ? (
                            <Link to="/">
                                {language === "hu" ? "Rólam" : "Über mich"}
                            </Link>
                        ) : (
                        <p onClick={() => scrollToElement(language === "hu" ? "rolam" : "ubermich")}>
                            {language === "hu" ? "Rólam" : "Über mich"}
                        </p>
                        )}
                    </h5>
                    <h5>
                        {pathname === '/gallery' ? (
                            <Link to="/">
                                {language === "hu" ? "Rajzok" : "Zeichnungen"}
                            </Link>
                        ) : (
                        <p onClick={() => scrollToElement(language === "hu" ? "rajzok" : "zeichnungen")}>
                            {language === "hu" ? "Rajzok" : "Zeichnungen"}
                        </p>
                        )}
                    </h5>
                    <h5>
                        {pathname === '/gallery' ? (
                            <Link to="/">
                                {language === "hu" ? "Festmények" : "Gemälde"}
                            </Link>
                        ) : (
                        <p onClick={() => scrollToElement(language === "hu" ? "festmenyek" : "gemaelde")}>
                            {language === "hu" ? "Festmények" : "Gemälde"}
                        </p>
                        )}
                    </h5>
                    <h5>  
                        {pathname === '/gallery' ? (
                            <Link to="/">
                                {language === "hu" ? "Tetoválások" : "Tätowierungen"}
                            </Link>
                        ) : (
                        <p onClick={() => scrollToElement(language === "hu" ? "tetovalasok" : "taetowierungen")}>
                            {language === "hu" ? "Tetoválások" : "Tätowierungen"}
                        </p>
                        )}
                    </h5>
                </div>
            </div>
            <div className='mt-3 footer-grey'>
                <h6>© {year} {language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}</h6>
                <p>
                    Designed and developed by <a href="https://szakacsgergo.com" target="_blank" rel="noreferrer">Gergő Szakács</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer