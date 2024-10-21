import { SetStateAction, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import VideoPlayer from "../components/VideoPlayer"; 
import { LanguageContext } from '../main'; 
const Home = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Navigation must be used within a LanguageProvider");
  }
  const { language } = context;

  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <article className='dark background overflow-x-hidden row'>
      <aside className="d-none d-lg-block large-navigation position-fixed d-flex align-items-center justify-content-center z-2">
        <div className='py-3'>
          <h2>  
            <Link
              to={language === "hu" ? "#rolam" : "#ubermich"}
              className={activeSection === (language === "hu" ? "#rolam" : "#ubermich") ? 'active' : ''}
              onClick={() => handleSetActive(language === "hu" ? "#rolam" : "#ubermich")}
              >
              {language === "hu" ? "Rólam" : "Über mich"}
            </Link>
          </h2>
          <h2>  
            <Link
              to={language === "hu" ? "#rajzok" : "#zeichnungen"}
              className={activeSection === (language === "hu" ? "#rajzok" : "#zeichnungen") ? 'active' : ''}
              onClick={() => handleSetActive(language === "hu" ? "#rajzok" : "#zeichnungen")}
              >
              {language === "hu" ? "Rajzok" : "Zeichnungen"}
            </Link>
          </h2>
          <h2>  
            <Link
            to={language === "hu" ? "#festmenyek" : "#gemaelde"}
            className={activeSection === (language === "hu" ? "#festmenyek" : "#gemaelde") ? 'active' : ''}
            onClick={() => handleSetActive(language === "hu" ? "#festmenyek" : "#gemaelde")}
            >
            {language === "hu" ? "Festmények" : "Gemälde"}
          </Link>
          </h2>
          <h2>  
            <Link
              to={language === "hu" ? "#tetovalasok" : "#taetowierungen"}
              className={activeSection === (language === "hu" ? "#tetovalasok" : "#taetowierungen") ? 'active' : ''}
              onClick={() => handleSetActive(language === "hu" ? "#tetovalasok" : "#taetowierungen")}
            >
              {language === "hu" ? "Tetoválások" : "Tätowierungen"}
            </Link>
          </h2>

        </div>

        <h3>
          <p>
            <a href="mailto:contact@tiborszakacs.com">contact@tiborszakacs.com</a>
          </p>
          <p>
            <a href={language === "hu" ? "tel:+36706149575" : "tel:+4368181190760"}>{language === "hu" ? "+36 70 614 9575" : "+43 681 8119 0760"}</a>
          </p>
          <p>
            <Link to={language === "hu" ? "https://vps.szakacsgergo.com:80/public/tibor/oneletrajz.pdf" : "https://vps.szakacsgergo.com:80/public/tibor/lebenslauf.pdf"}>{language === "hu" ? "Önéletrajz" : "Lebenslauf"}</Link>
          </p>
        </h3>
      </aside>
      <div className='video-player position-relative zn-1 d-none d-lg-block'> 
        <div className='position-absolute top-0 end-0'>
          <VideoPlayer src={""}/>
        </div>
      </div>

      <div id={language === "hu" ? "rolam" : "ubermich"} className='about d-flex justify-content-end'>
        <div className='col-12 col-lg-9 px-5 py-5 d-flex flex-column justify-content-center align-items-start'>
          <h1>{language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aperiam, dolor, quibusdam tempora quos ab ad sint, officiis illum in quasi veritatis adipisci consequatur! Illo repellat libero facere consectetur at, mollitia nemo odit impedit labore qui ipsam veritatis porro perspiciatis, unde architecto? Hic omnis qui dolore unde dolor repellendus temporibus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad ratione qui necessitatibus hic esse rerum incidunt dolorem mollitia inventore.</p>
        </div>
      </div>
      <div id={language === "hu" ? "rajzok" : "zeichnungen"} className='image-slider d-flex justify-content-end'>
        <div className='col-12 col-lg-9 px-5 py-5 d-flex flex-column justify-content-center align-items-start'>
          <img src="sample.jpg" alt="" />
        </div>
      </div>
    </article>
  );
}

export default Home;
