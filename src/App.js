import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';
import NavStyle from './Pages/Shared/NavBar/NavStyle';
import NavStyle2 from './Pages/Shared/NavBar/NavStyle2';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <NavStyle2 />
      <NavStyle></NavStyle>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
