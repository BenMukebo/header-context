import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHeaderContext } from '../../App';
import HeaderMenuLinks from '../../Components/Header/HeaderMenuLinks';

const AboutPage: React.FC = () => {
  const { setLeftContent, leftContent, setMenuLinks } = useHeaderContext();

  const links = [
    {
      name: 'Home',
      url: '/',
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
    <div>
      <h1>About Page</h1>
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
