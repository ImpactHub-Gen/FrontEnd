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
      <div className="flex justify-center bg-gradient-to-r from-blue-hl to-orange-400 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Construindo conexões, impulsionando mudanças</p>
            <p className='text-lg'>ImpactHub | &copy; Copyright {data}</p>
            <div className='flex gap-4 mt-2'>
              <Link to='//linkedin.com' target='_blank'><LinkedinLogo size={36} weight='bold'></LinkedinLogo></Link>
              <Link to='//instagram.com' target='_blank'><InstagramLogo size={36} weight='bold'></InstagramLogo></Link>
              <Link to='//facebook.com' target='_blank'><FacebookLogo size={36} weight='bold'></FacebookLogo></Link>
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