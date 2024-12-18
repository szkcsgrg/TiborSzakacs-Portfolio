import { useEffect, useState } from 'react'

import main_3 from '../assets/rajzok/3.jpg'
import main_4 from '../assets/rajzok/4.jpg'
import main_12 from '../assets/rajzok/12.jpg'
import main_17 from '../assets/rajzok/17.jpg'
import main_g from '../assets/rajzok/23.jpg'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';


function RajzokGallery() {
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
                <img id="main3"  src={main_3} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main4" src={main_4} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main12" src={main_12} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="main17" src={main_17} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img id="maing" src={main_g} alt="" />
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

export default RajzokGallery