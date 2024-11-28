import { useEffect, useState } from 'react'

import main1 from '../assets/festmenyek/main/(Any) Bármi, 70X50, (oil-canvas) olaj-vászon.jpg'
import main2 from '../assets/festmenyek/main/Arany, olaj-vászon, 70x50.jpg'
import main3 from '../assets/festmenyek/main/IMG_2.jpg'
import main4 from '../assets/festmenyek/main/IMG_20240604_110307~3.jpg'
import main5 from '../assets/festmenyek/main/Lélekvesztő, 50x70,olaj-vászon.jpg'
import main6 from '../assets/festmenyek/main/Nem gondoltam volna, 25x60, olaj-vászon.jpg'
import main7 from '../assets/festmenyek/main/Portofino nagyjából,90x170, olaj-vászon.jpg'
import main8 from '../assets/festmenyek/main/ARLES-I_KÁVÉHÁZ_50x70_olaj-vászon_Másolat.jpg'
import main9 from '../assets/festmenyek/main/CSONTVÁRY_Római_híd_Mostarban_MÁSOLAT_25x50_olaj-fa.jpg'
import main10 from '../assets/festmenyek/main/Dalí_Az_emlékezés_állandósága_50x70_olaj-vászon_Másolat.jpg'
import main11 from '../assets/festmenyek/main/Dalí_Hallucinogén_torreádor_70x50_olaj-fa_Másolat.jpg'
import main12 from '../assets/festmenyek/main/MÁSOLAT_50x70_olaj-vászon.jpg'
import main13 from '../assets/festmenyek/main/Másolat_-_Lány_gyöngy_fülbevalóval(_Girl_with_The_Pearl_Earring_)_olaj-vászon_50x40.jpg'
import main14 from '../assets/festmenyek/main/Szinyei_A_léghajó_60x60_olaj-vászon_Másolat.jpg'


import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';


function FestmenyekGallery() {
    const [customGap, setCustomGap] = useState<number>(0);
    const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 607) {
            setCustomGap(-300);
        } else {
            setCustomGap(0);
        }
    };
    useEffect(() => { 
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    , []);

  return (
    <div className=''>
        <Splide className="slide" options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
                pauseOnHover: false, //s Do not pause scrolling when hovering over the carousel
                pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                rewind: true, // Rewind to start when the end is reached
                speed: -1.5, // Scrolling speed
            },
            drag: "free", 
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: '800px', // Fixed width for each slide
            gap: Number(customGap)+"px", // Gap between slides
        }}
        extensions={{ AutoScroll }}>
            <SplideSlide>
                <img id="main1"  src={main1} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main2" src={main2} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main3" src={main3} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main4" src={main4} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main5" src={main5} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main6" src={main6} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main7" src={main7} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main8" src={main8} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main9" src={main9} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main10" src={main10} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main11" src={main11} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main12" src={main12} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main13" src={main13} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main14" src={main14} alt="" />
            </SplideSlide>

        </Splide>


        {/* 
        <img className='images' id="main3" src={main_3} alt="" />
        <img className='images' id="main4" src={main_4} alt="" />
        <img className='images' id="main12" src={main_12} alt="" />
        <img className='images' id="main17" src={main_17} alt="" />
        <img className='images' id="maing" src={main_g} alt="" /> 
        */}
    </div>
  )
}

export default FestmenyekGallery