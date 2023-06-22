// import { createContext } from 'react';

import React, { useState } from "react";

interface IHeaderContextProps {
  leftContent: React.ReactNode;
  menuLinks: React.ReactNode;
  rightActions: React.ReactNode;
  setLeftContent: (logo: React.ReactNode) => void;
  setMenuLinks: (menuLinks: React.ReactNode) => void;
  setRightActions: (rightActions: React.ReactNode) => void;
}

export const HeaderContext = React.createContext<IHeaderContextProps | undefined>(undefined);

// export const useHeaderContext = () => React.useContext(HeaderContext);

export const useHeaderContext = () => {
  const context = React.useContext(HeaderContext);
  // if (context === undefined) {
  //   throw new Error('useHeaderContext must be used within a HeaderContextProvider');
  // }
  return context || {
    leftContent: <div>logo</div>,
    menuLinks: <div>Menu Links</div>,
    rightActions: <div>Right Actions</div>,
  };
}

interface Props {
  children: React.ReactNode | ((props: IHeaderContextProps) => React.ReactNode);
  // The props children can also be a function
}

const HeaderContextProvider = (props: Props) => {
 
  const [leftContent, setLeftContentData] = useState<React.ReactNode>(
    // <img src={reactLogo} alt='React Logo' />,
    <div>logo</div>,
  );
  const [menuLinks, setMenuLinksData] = useState<React.ReactNode>(
    <div>Menu Links</div>,
  );
  const [rightActions, setRightActionsData] = useState<React.ReactNode>(
    <div>Right Actions</div>,
  );
  

  const value = {
    leftContent,
    menuLinks,
    rightActions,
    setLeftContent: (content: React.ReactNode) => {
      setLeftContentData(content);props.children
    },
    setMenuLinks: (menuLinks: React.ReactNode) => {
      setMenuLinksData(menuLinks);
    },
    setRightActions: (rightActions: React.ReactNode) => {
      setRightActionsData(rightActions);
    },
  }
  
  return (
    <HeaderContext.Provider  value={value}>
      {
        typeof props.children === 'function' ? props.children(value) : props.children 
        {/* If a function, return the function with the value as a parameter, else return the props children*/ }
      }
    </HeaderContext.Provider>
  )
}
export default HeaderContextProvider;