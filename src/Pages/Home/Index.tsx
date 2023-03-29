import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useHeaderContext } from '../../App';
import reactLogo from '../../assets/react.svg';
import HeaderMenuLinks from '../../Components/Header/HeaderMenuLinks';

const Home = () => {
  const navigate = useNavigate();

  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Contact',
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
      }}
    >
      Home
      <button
        type='button'
        onClick={() => {
          navigate('/about');
        }}
      >
        Go to about
      </button>
    </div>
  );
};

export default Home;
