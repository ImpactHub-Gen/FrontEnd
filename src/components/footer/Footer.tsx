import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <div className="flex justify-center">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Construindo conexões, impulsionando mudanças</p>
            <p className='text-lg'>ImpactHub | &copy; Copyright {data}</p>
            <div className='flex gap-2'>
              <Link to='//linkedin.com' target='_blank'><LinkedinLogo size={48} weight='bold'></LinkedinLogo></Link>
              <Link to='//instagram.com' target='_blank'><InstagramLogo size={48} weight='bold'></InstagramLogo></Link>
              <Link to='//facebook.com' target='_blank'><FacebookLogo size={48} weight='bold'></FacebookLogo></Link>
            </div>
          </div>
        </div>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer

// bg-gradient-to-r from-orange-400 to-blue-500 py-12"