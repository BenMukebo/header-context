import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHeaderContext } from '../../Contexts/HeaderContext';
import HeaderMenuLinks from '../../Components/Header/HeaderMenuLinks';

const AboutPage: React.FC = () => {
  const { setLeftContent, leftContent, setMenuLinks } = useHeaderContext();

  const links = [
    {
      name: 'Accueil',
      url: '/',
    },
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'Movies',
      url: '/movies',
    },
    {
      name: 'Music',
      url: '/',
    },
  ];

  useEffect(() => {
    setLeftContent(null);
    setMenuLinks(<HeaderMenuLinks links={links} />);
  }, []);

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10rem',
      padding: '10rem',
    }}
    >
      <h1> About</h1>
      <h2>About Page Description</h2>
     
      <NavLink to='/'>Go to the Home</NavLink>
    </div>
  );
};

const NewLogo: React.FC = () => {
  return (
    <div>
      <img src='/vite.svg' alt='Vite Logo' />
    </div>
  );
};

export default AboutPage;
