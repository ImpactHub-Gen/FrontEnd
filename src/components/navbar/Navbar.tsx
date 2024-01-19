import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  return (
    <>
     <div className='w-full justify-center py-4 '>
          <div className='container flex justify-between text-lg'>
            <div className='text-2xl font-bold'>ImpactHub</div>
            <div>
                <input className='w-96 border-2 border-black' type="search" name="" id="" />
            </div>
            <div className='flex gap-4'>
                <Link to='/home' className='hover:underline'>Home</Link>
                <Link to='/ongs' className='hover:underline'>ONGs</Link>
                <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
                <div>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar