import React, { Children, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Components/Header/Index';
import Home from './Pages/Home/Index';
import AboutPage from './Pages/About/Index';
import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HeaderContextProvider from './Contexts/HeaderContext';

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
 

  return (
    <div className='App'>
      <HeaderContextProvider>
       {({menuLinks}) => (
        <>
        {menuLinks?.toLocaleString}
         <Header />
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        </>
       )}
      </HeaderContextProvider>
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
