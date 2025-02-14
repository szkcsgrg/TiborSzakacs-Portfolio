import { useContext } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


import VideoPlayer from "../components/VideoPlayer"; 
import { LanguageContext } from '../main'; 
import RajzokGallery from '../components/RajzokGallery';


import profile from "../assets/landing/profile.png";
import FestmenyekGallery from '../components/FestmenyekGallery';
import TetovalasokGallery from '../components/TetovalasokGallery';

const Home = () => {
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
  const showGoToTop = () => {
    const goUp = document.querySelector('.go-up');
    if (goUp) {
      goUp.classList.remove('d-none');
      goUp.classList.add('d-block');
    }
  }
  const hideGoToTop = () => {
    const goUp = document.querySelector('.go-up');
    if (goUp) {
      goUp.classList.remove('d-block');
      goUp.classList.add('d-none');
    }
  }
  // const [customAboutPositionHY, setCustomAboutPositionHY] = useState<number>(0);
  // const [customAboutPositionHX, setCustomAboutPositionHX] = useState<number>(0);
  // // const [customAboutPositionPY, setCustomAboutPositionPY] = useState<number>(0);
  // // const [customAboutPositionPX, setCustomAboutPositionPX] = useState<number>(0);
  // const [customAboutPositionSX, setCustomAboutPositionSX] = useState<number>(0);
  // const [customAboutPositionSY, setCustomAboutPositionSY] = useState<number>(0);

  // const handleResize = () => {
  //       const width = window.innerWidth;
  //       if (width <= 1500) {
  //         setCustomAboutPositionSY(0);
  //         setCustomAboutPositionSX(0);
  //         setCustomAboutPositionHY(0);
  //         setCustomAboutPositionHX(0);
  //       } else {
  //         // setCustomAboutPositionSY(-800);
  //         // setCustomAboutPositionSX(200);
  //         setCustomAboutPositionHY(-600);
  //         setCustomAboutPositionHX(100);
  //       }
  // };
  // useEffect(() => { 
  //       // handleResize();
  //       // window.addEventListener('resize', handleResize);
  //       // return () => window.removeEventListener('resize', handleResize);
  // }, []);


  return (
    <article className='dark background overflow-x-hidden row pb-5'>
      {/* <aside className="col-lg-4 d-none d-lg-block large-navigation position-fixed d-flex align-items-center justify-content-center z-2">
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
      </aside> */}
      <motion.div 
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }} 
        onViewportLeave={showGoToTop} 
        onViewportEnter={hideGoToTop} 
        className='video-player position-relative zn-1 d-none d-lg-block' id="#"> 
        <div className='position-absolute w-100 text-center'>
          
          <motion.div
          initial={{ y: -1000, opacity: 0 }}
          transition={{ duration: 2, delay: 1 }}
          animate={{ y: 0 , opacity: 1 }}
          onClick={() => scrollToElement(language === "hu" ? "rolam" : "ubermich")} 
          className="go-down position-absolute bottom-0 w-100 mx-auto">
            <i className="bi bi-mouse"></i> 
          </motion.div>

          <motion.div 
            initial={{ x: -1000, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            animate={{ x: 0 , opacity: 1 }}
            className='contact position-absolute d-flex gap-3 bottom-0 start-0 mx-3 text-start'>
            <p>
              <a href="mailto:kontakt@tiborszakacs.com">kontakt@szakacstibor.com</a>
            </p>
            /
            <p>
              <a href={language === "hu" ? "tel:+36706149575" : "tel:+4368181190760"}>{language === "hu" ? "+36 70 614 9575" : "+43 681 8119 0760"}</a>
            </p>
            /
            <p>
              <Link to={language === "hu" ?  oneletraj : lebenslauf}>{language === "hu" ? "Önéletrajz" : "Lebenslauf"}</Link>
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 1000, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            animate={{ x: 0 , opacity: 1 }}>
            <Link className="youtube position-absolute bottom-0 end-0 mx-5 text-end" target="_BLANK" to="https://www.youtube.com/watch?v=A5x3XJ8aI58">
              Sunbabiez - Mulholland drive <br /> drawing by Tibor Szakács
            </Link>
          </motion.div>

          <VideoPlayer src={""}/>
        </div>
      </motion.div>

      <div className='d-none d-xl-block gradient-transition'></div>

      <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }} 
      id={language === "hu" ? "rolam" : "ubermich"} className='p-4 about d-flex flex-row my-lg-3'>
        <div id='#' className='col-12 col-md-12 my-0 d-flex flex-column flex-xxl-row justify-content-evenly align-items-center'>
          <img src={profile} alt="Profile Image" className='col-xxl-6'/>                                                 
          <div className='profile-img d-flex flex-column justify-content-center col-xxl-6'>                          
            <motion.h1 
            // initial={{ y: 200, x: -300, opacity: 0 }}                                        
            // transition={{ duration: 1, easings: "easeOut" }}                                               
            // whileInView={{ y: customAboutPositionHY, x: customAboutPositionHX, opacity: 1 }} 
            className=''>{language === "hu" ? "Szakács Tibor" : "Tibor Szakács"}
            </motion.h1>
            <motion.p 
            // initial={{ opacity: 0 }}
            // transition={{ duration: 2, easings: "easeOut", delay: 1.5 }}
            // whileInView={{ opacity: 1 }} 
            className='m-0 mt-3 p-0'>
              {language === "hu" 
              ? (
                <>
                  <p>
                    Jellemző stílus nélkül alkotok. Pozitív terápiaként, gyógymódként hat rám bármelyik képem létrehozása, legyen az saját kép vagy másolat.
                    <br />
                    Idén belekóstoltam a tetoválásba és a falfestésbe is. Ezek még gyerekcipőben járó elfoglaltságok.
                  </p>
                  <p>Ha fel szeretné venni velem a <span className='link' onClick={() => scrollToElement("kapcsolat")}>kapcsolatot</span>, kérem keressen bátran!</p>
                </>
              )
              :
               (
                <>
                  <p>
                    Ich erschaffe ohne charakteristischen Stil. Die Erstellung jedes Bildes, sei es ein eigenes oder eine Kopie, wirkt auf mich wie eine positive Therapie, eine Heilung.
                    <br />
                    Dieses Jahr habe ich mich auch an Tätowierungen und Wandmalereien versucht. Das sind noch junge Beschäftigungen für mich.
                  </p>
                  <p>Wenn Sie mit mir in <span className='link' onClick={() => scrollToElement("kapcsolat")}>Kontakt</span> treten möchten, zögern Sie bitte nicht!</p>
                </>
               )
              }
            </motion.p>
          </div>
        </div>
        {/* <motion.div 
          initial={{ x: 0, y: 0, opacity: 0 }}
          transition={{ duration: 2, easings: "easeOut", delay: 1.5 }}
          whileInView={{ x: customAboutPositionSX, y: customAboutPositionSY, opacity: 1 }}
          className='arrow m-5 m-lg-0 mx-lg-5 p-5 p-lg-0 px-lg-5' onClick={() => scrollToElement(language === "hu" ? "rajzok" : "zeichnungen")}>
              <h2 className='my-2 d-none d-lg-block'>{language === "hu" ? "Tovább" : "Weiter"} </h2>
              <svg className='d-none d-lg-block'  fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.816 302.816">
                <path id="XMLID_6_" d="M298.423,152.996c-5.857-5.858-15.354-5.858-21.213,0l-35.137,35.136
                  c-5.871-59.78-50.15-111.403-112.001-123.706c-45.526-9.055-92.479,5.005-125.596,37.612c-5.903,5.813-5.977,15.31-0.165,21.213
                  c5.813,5.903,15.31,5.977,21.212,0.164c26.029-25.628,62.923-36.679,98.695-29.565c48.865,9.72,83.772,50.677,88.07,97.978
                  l-38.835-38.835c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l62.485,62.485
                  c2.929,2.929,6.768,4.393,10.606,4.393s7.678-1.464,10.607-4.393l62.483-62.482C304.281,168.352,304.281,158.854,298.423,152.996z"
                  />
              </svg>
        </motion.div> */}



      </motion.div>

      <div id={language === "hu" ? "rajzok" : "zeichnungen"} className='px-4 image-slider d-flex justify-content-center h-100 mt-5 pt-5'>
        <div className='col-12 col-md-12 col-lg-12 d-flex flex-column justify-content-center align-items-start'>
          <motion.h1 
          initial={{ opacity: 0 }} 
          transition={{ duration: 2, easings: "easeOut",}}
          whileInView={{ opacity: 1 }} 
          className='px-xxl-5'>{language === "hu" ? "Rajzok" : "Zeichnungen"}</motion.h1>
          <motion.p 
          initial={{ opacity: 0 }} 
          transition={{ duration: 2, easings: "easeOut",}}
          whileInView={{ opacity: 1 }} 
          className='px-xxl-5'>
            {language === "hu" ? 
              <>A <Link to="/gallery">Galériámban</Link> megtalálhatóak további rajzaim.</>
            : 
              <>In meiner <Link to="/gallery">Galerie</Link> finden Sie weitere Zeichnungen.</>
            }
          </motion.p>
          <RajzokGallery />
        </div>
      </div> 

      <div id={language === "hu" ? "festmenyek" : "gemaelde"} className='px-4 image-slider d-flex justify-content-center h-100'>
        <div className='mt-5 col-12 col-md-12 col-lg-12 d-flex flex-column justify-content-center align-items-start'>
          <motion.h1 
          initial={{ opacity: 0 }} 
          transition={{ duration: 2, easings: "easeOut",}}
          whileInView={{ opacity: 1 }} 
          className='px-xxl-5'>{language === "hu" ? "Festmények" : "Gemälde"}</motion.h1>
          <motion.p 
          initial={{ opacity: 0 }} 
          transition={{ duration: 2, easings: "easeOut",}}
          whileInView={{ opacity: 1 }} 
          className='px-xxl-5'>
            {language === "hu" ? 
              <>A <Link to="/gallery">Galériámban</Link> megtalálhatóak további festményeim.</>
            : 
              <>In meiner <Link to="/gallery">Galerie</Link> finden Sie weitere Gemälde.</>
            }
          </motion.p>
          <FestmenyekGallery />
        </div>
      </div>

      <div id={language === "hu" ? "tetovalasok" : "taetowierungen"} className='px-4 image-slider d-flex justify-content-center h-100'>
        <div className='mt-5 col-12 col-md-12 col-lg-12 d-flex flex-column justify-content-center align-items-start'>
          <motion.h1
          initial={{ opacity: 0 }} 
          transition={{ duration: 2, easings: "easeOut",}}
          whileInView={{ opacity: 1 }} 
          className='px-xxl-5'>{language === "hu" ? "Tetoválások" : "Tätowierungen"}</motion.h1>
          <motion.p 
          initial={{ opacity: 0 }} 
          transition={{ duration: 2, easings: "easeOut",}}
          whileInView={{ opacity: 1 }} 
          className='px-xxl-5'>
            {language === "hu" ? 
              <>A <Link to="/gallery">Galériámban</Link> megtalálhatóak további tetoválásaim.</>
            : 
              <>In meiner <Link to="/gallery">Galerie</Link> finden Sie weitere Taetowierungen.</>
            }
          </motion.p>
          <TetovalasokGallery />
        </div>
      </div>


      <motion.div 
        initial={{ x: 250, opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        animate={{ x: 0 , opacity: 1 }}
        className='go-up d-none position-fixed bottom-0 end-0 text-end mx-2 my-2'
        ><i onClick={() => scrollToElement('#')} className="bi bi-arrow-up-circle-fill"></i>
      </motion.div>

      
    </article>


  );
}

export default Home;
