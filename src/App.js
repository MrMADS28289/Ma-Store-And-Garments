import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Test from './Pages/test/Test';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Test></Test>
    </>
  );
}

export default App;
