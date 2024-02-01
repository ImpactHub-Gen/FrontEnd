import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full flex justify-center p-4 '>
          <div className='container flex justify-between text-lg'>
            <Link to='/home' className='text-2xl font-bold'>ImpactHub</Link>
            <div>
                <input className='w-96 border-2 border-black' type="search" name="" id="" />
            </div>
            <div className='flex gap-4'>
                <Link to='/ongs' className='hover:underline'>ONGs</Link>
                <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
                <Link to='/temas' className='hover:underline'>Temas</Link>
                <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    } 
    
  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar