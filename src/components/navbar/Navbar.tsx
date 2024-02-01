import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <>
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
                <div>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar