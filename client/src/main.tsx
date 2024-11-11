import { StrictMode, useState, useContext, createContext, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navigation from './components/Navigation';
import LanguageSelection from './components/LanguageSelection';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import Drawings from './pages/Drawings';
import Tattos from './pages/Tattos';

import './styles/main.css';

const LanguageContext = createContext<{ language: string | null, setLanguage: React.Dispatch<React.SetStateAction<string | null>> } | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string | null>(null);

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
        {language === null && localStorage.getItem("lang") ? (
          <LanguageSelection setLanguage={setLanguage} />
        ) : (
          <>
            <Navigation />
            <Outlet />
          </>
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
          path: "/rajzok",
          element: <Drawings />,
        },
        {
          path: "/zeichnungen",
          element: <Drawings />,
        },
        {
          path: "/festmenyek",
          element: <Paintings />,
        },
        {
          path: "/gemaelde",
          element: <Paintings />,
        },
        {
          path: "/tetovalasok",
          element: <Tattos />,
        },
        {
          path: "/taetowierungen",
          element: <Tattos />,
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