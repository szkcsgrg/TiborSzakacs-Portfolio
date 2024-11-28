import { useContext, useState } from 'react';
import { LanguageContext } from '../main'; 
import { motion } from 'framer-motion';

//Since the filemannager systems are outdated and cannot be used in this version of the project, 
//I will do the imports manually. Easier and faster than trying to make a file manager. 

import { falfestmenyekPaths } from '../components/imports/falfestmenyekPaths';
import { festmenyekPaths } from '../components/imports/festmenyekPaths';
import { masolatokPaths } from '../components/imports/masolatokPaths';
import { rajzokPaths } from '../components/imports/rajzokPaths';
import { tetovalasokPaths } from '../components/imports/tetovalasokPaths';
import { vizfestmenyekPaths } from '../components/imports/vizfestmenyekPaths';


function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Gallery() {
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

  // const showGoToTop = () => {
  //   const goUp = document.querySelector('.go-up');
  //   if (goUp) {
  //     goUp.classList.remove('d-none');
  //     goUp.classList.add('d-block');
  //   }
  // }

  // const hideGoToTop = () => {
  //   const goUp = document.querySelector('.go-up');
  //   if (goUp) {
  //     goUp.classList.remove('d-block');
  //     goUp.classList.add('d-none');
  //   }
  // }



  const allImages = [
    ...rajzokPaths.map(path => ({ path, className: 'rajz' })),
    ...festmenyekPaths.map(path => ({ path, className: 'festmeny' })),
    ...falfestmenyekPaths.map(path => ({ path, className: 'falfestmeny' })),
    ...masolatokPaths.map(path => ({ path, className: 'masolat' })),
    ...vizfestmenyekPaths.map(path => ({ path, className: 'vizfestmeny' })),
    ...tetovalasokPaths.map(path => ({ path, className: 'tetovalas' })),
  ];

  const shuffledImages = shuffleArray(allImages);
  const [filteredImages, setFilteredImages] = useState(shuffledImages);

  const sortTo = (className: string | null) => () => {
    if(className === null){
      setFilteredImages(shuffledImages);
      return;
    }
    const filtered = shuffledImages.filter(image => image.className === className);
    setFilteredImages(filtered);
  };

  return (
    <article className='gallery dark background overflow-x-hidden row pb-5'>
        <header id="#" className='d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-md-center gap-4 mt-5 pt-4'>
          <h4 className='text-center' onClick={sortTo(null)}>
            <i className="bi bi-arrow-clockwise"></i>
          </h4>
          <h4 className='text-center' onClick={sortTo("rajz")}>
            {language === "hu" ? "Rajzok" : "Zeichnungen"}
          </h4>
          <h4 className='text-center' onClick={sortTo("festmeny")}>
            {language === "hu" ? "Festmények" : "Gemälde"}
          </h4>
          <h4 className='text-center' onClick={sortTo("falfestmeny")}>
            {language === "hu" ? "Falfestmények" : "Wandgemälde"}
          </h4>
          <h4 className='text-center' onClick={sortTo("vizfestmeny")}>
            {language === "hu" ? "Vízfestmények" : "Aquarelle"}
          </h4>
          <h4 className='text-center' onClick={sortTo("masolat")}>
            {language === "hu" ? "Másolatok" : "Kopien"}
          </h4>
          <h4 className='text-center' onClick={sortTo("tetovalas")}>
            {language === "hu" ? "Tetoválások" : "Tätowierungen"}
          </h4>
        </header>
        <div className='image-loader text-ceenter'>
        {filteredImages.map((image, index) => (
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ duration: 1, easings: "easeOut" }}
              whileInView={{ opacity: 1 }} 
              key={index}
              src={image.path}
              // alt={`${image.className} ${index + 1}`}
              alt ={image.path}
              className={image.className}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
        ))}
        </div>

        <motion.div 
        initial={{ x: 250, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0 , opacity: 1 }}
        className='go-up position-fixed bottom-0 end-0 text-end mx-2 my-2'
        ><i onClick={() => scrollToElement('#')} className="bi bi-arrow-up-circle-fill"></i>
      </motion.div>

    </article>
  )
}

export default Gallery