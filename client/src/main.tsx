import { StrictMode, useState, useContext, createContext, ReactNode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LanguageSelection from './components/LanguageSelection';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

import './styles/main.css';

const LanguageContext = createContext<{ language: string | null, setLanguage: React.Dispatch<React.SetStateAction<string | null>> } | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("lang");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const App: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("App must be used within a LanguageProvider");
  }
  const { language, setLanguage } = context;

  const Layout = () => {
    return (
      <div>
        {/* {language} */}
        {language === null ? (
          <LanguageSelection setLanguage={setLanguage} />
        ) : (
          <ErrorBoundary>
            <Navigation />
            <Outlet />
            <Footer />
          </ErrorBoundary>
        )}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        }
      ],
    },
  ]);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export { LanguageContext }; 