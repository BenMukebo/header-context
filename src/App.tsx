import React, { Children, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Components/Header/Index';
import Home from './Pages/Home/Index';
import AboutPage from './Pages/About/Index';
import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HeaderContext from './Contexts/HeaderContext';

// export const HeaderConsumer = HeaderContext.Consumer;
export const useHeaderContext = () => React.useContext(HeaderContext);

// const useHeaderContext = (props) => {

//   return {
//     leftContent: props.leftContent,
//     menuLinks: props.menuLinks,
//     rightActions: props.rightActions,
//     setLeftContent: (logo: React.ReactNode) => {},
//     setMenuLinks: (menuLinks: React.ReactNode) => {},
//     setRightActions: (rightActions: React.ReactNode) => {
//   }
// }

// const {} = useHeaderContext();

function App() {
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

  const HeaderProvider = HeaderContext.Provider;

  return (
    <div className='App'>
      <HeaderProvider
        value={{
          leftContent,
          menuLinks,
          rightActions,
          setLeftContent: (content: React.ReactNode) => { //Question: why is this
            setLeftContentData(content);
          },
          setMenuLinks: (menuLinks: React.ReactNode) => {
            setMenuLinksData(menuLinks);
          },
          setRightActions: (rightActions: React.ReactNode) => {
            setRightActionsData(rightActions);
          },
        }}
      >
        <Header />
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </HeaderProvider>
    </div>
  );
}

export default App;

// consume the content HeaderConsumer

// const Header = () => {
//   return (
//     <HeaderConsumer>
//       {({}) => {
//         return <div>Header</div>;
//       }}
//     </HeaderConsumer>
//   );
// };

// interface Props {
//   children: () => React.ReactNode;
// }

// const Parent: React.FC<Props> = (props) => {
//   const { children } = props;
//   const [state, setState] = useState({});

//   return <div>{children(state)}</div>;
// };

// const Child: React.FC<any> = (props) => {
//   const { state } = props;

//   return (
//     <div>
//       <div>{state}</div>
//     </div>
//   );
// };

// const App = () => {
//   useEffect(() => {}, []);
//   return (
//     <Parent>
//       {function (state) {
//         return <Child state={state} />;
//       }}
//     </Parent>
//   );
// };
