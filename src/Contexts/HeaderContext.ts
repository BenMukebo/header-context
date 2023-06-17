// import { createContext } from 'react';

import React from "react";

interface IHeaderContextProps {
  leftContent: React.ReactNode;
  menuLinks: React.ReactNode;
  rightActions: React.ReactNode;
  setLeftContent: (logo: React.ReactNode) => void;
  setMenuLinks: (menuLinks: React.ReactNode) => void;
  setRightActions: (rightActions: React.ReactNode) => void;
}

const IHeaderContext = {
  leftContent: null,
  menuLinks: null,
  rightActions: null,
  setLeftContent: (logo: React.ReactNode) => {},
  setMenuLinks: (menuLinks: React.ReactNode) => {},
  setRightActions: (rightActions: React.ReactNode) => {},
}

const HeaderContext = React.createContext<IHeaderContextProps>(IHeaderContext);

export default HeaderContext;