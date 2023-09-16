import './App.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavbarComponent from './components/Navbar/Navbar';
import SocialIconsComponent from './components/SocialIcons/SocialIcons';
import HeaderComponent from './components/Header/Header';
import AboutComponent from './components/About/About';
import ProjectsComponent from './components/Projects/Projects';
import SkillsComponent from './components/Skills/Skills';
import ContactComponent from './components/Contact/Contact';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Mi Portfolio personal, echo en React.js con Create-React-App"
        />
        <meta name="keywords" content="React, Portfolio, web development, CSS, React Hooks" />
      </Helmet>
      <BrowserRouter>
        <NavbarComponent />
        <SocialIconsComponent />
        <Routes>
          <Route exact path='/' Component={HeaderComponent} />
          <Route path='/projects' Component={ProjectsComponent} />
          <Route path='/skills' Component={SkillsComponent} />
          <Route path='/about' Component={AboutComponent} />
          <Route path='/contact' Component={ContactComponent} />
          <Route path='*' Component={HeaderComponent} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p style={{ textAlign: 'center', paddingBottom: '1rem', fontStyle: 'italic' }}>&copy; Santiago Ferreira {new Date().getFullYear()}</p>
      </footer>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
