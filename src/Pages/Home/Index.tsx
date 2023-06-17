import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useHeaderContext } from '../../App';
import reactLogo from '../../assets/react.svg';
import HeaderMenuLinks from '../../Components/Header/HeaderMenuLinks';

const Home = () => {
  const navigate = useNavigate();

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
      name: 'About',
      url: '/about',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
    {
      name: 'candidate',
      url: '/contact',
    },
  ];
  const { setLeftContent, setMenuLinks } = useHeaderContext();
  useEffect(() => {
    setLeftContent(<img src={reactLogo} alt='React Logo' />);
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
      <h1> Home</h1>
      <h2>Home Page Description</h2>
     
      <button type='button' onClick={() => {   navigate('/about'); }}>
        Go to about
      </button>
    </div>
  );
};

export default Home;
