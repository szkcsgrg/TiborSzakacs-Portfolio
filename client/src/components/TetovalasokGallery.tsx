import { useEffect, useState } from 'react'

import main1 from '../assets/tetovalasok/52192196-f74b-4e37-b99e-4357bc89371a.jpg'
import main2 from '../assets/tetovalasok/bf6d7e04-49ed-4cdc-83f3-0931af1784fe.jpg'
import main3 from '../assets/tetovalasok/IMG-4bb417cc71c707b361299a77b3eef281-V~2.jpg'
import main4 from '../assets/tetovalasok/IMG-20240425-WA0000.jpg'
import main5 from '../assets/tetovalasok/IMG-20240825-WA0005~2.jpg'
import main6 from '../assets/tetovalasok/IMG-bf8d44650366eb9f436e6e15415729f6-V.jpg'
import main7 from '../assets/tetovalasok/Messenger_creation_11b7bb35-0bf4-4e21-a888-fc8d7da0a7ba.jpg'

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
                speed: 1.5 // Scrolling speed
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