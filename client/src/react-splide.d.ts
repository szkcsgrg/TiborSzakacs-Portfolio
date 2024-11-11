declare module '@splidejs/react-splide' {
    import { ComponentType, ReactNode } from 'react';
  
    export interface SplideProps {
      options?: Record<string, any>;
      extensions?: Record<string, any>;
      [key: string]: any;
    }
  
    export interface SplideSlideProps {
      children?: ReactNode;
    }
  
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideSlideProps>;
  }