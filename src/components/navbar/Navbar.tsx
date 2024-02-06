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
        <div className='w-full flex justify-center bg-gradient-to-r from-orange-400 to-blue-hl py-10'>
          <div className='container flex justify-between text-lg'>
            <Link to='/home' className='text-2xl font-bold'>ImpactHub</Link>
            <div className='flex gap-4 text-white font-semibold'>
              <Link to='/home' className='hover:text-orange-hl'>Home</Link>
              <Link to='/temas' className='hover:text-orange-hl'>Temas</Link>
              <Link to='/cadastroTema' className='hover:text-orange-hl'>Cadastrar tema</Link>
              <Link to='/sobre' className='hover:text-orange-hl'>Sobre nós</Link>
              <Link to='' onClick={logout} className='hover:text-orange-hl'>Sair</Link>
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