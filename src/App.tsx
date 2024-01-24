import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Ongs from './pages/ongs/Ongs';
import Cadastro from './pages/cadastro/Cadastro'


function App() {
  return (
    <>
   <AuthProvider>
     <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ongs" element={<Ongs />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
   </AuthProvider>
    </>
);
}
export default App;