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
        <div className='w-full flex justify-center bg-gradient-to-r from-orange-400 to-blue-hl py-10 h-28'>
          <div className='container flex justify-between text-lg'>
          <Link to='/home' className='text-2xl font-bold'>
            <img
              src='https://media.discordapp.net/attachments/1180165078037827635/1204424420941369354/ImpactHub_navbar.png?ex=6602d327&is=65f05e27&hm=00b900b86cfeb9a2dbe022bf8d16b3b6058b288b190e61c447e6e15df4f26806&=&format=webp&quality=lossless'
              alt='Logo'
              className='h-12 -mt-3'
              style={{ height: '150%' }} 
            />
          </Link>
            <div className='flex gap-4 text-white font-semibold'>
              <Link to='/home' className='hover:text-orange-hl'>Home</Link>
              <Link to='/temas' className='hover:text-orange-hl'>Temas</Link>
              <Link to='/cadastroTema' className='hover:text-orange-hl'>Cadastrar tema</Link>
              <Link to='/sobre' className='hover:text-orange-hl'>Sobre</Link>
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