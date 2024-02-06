import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className=' flex flex-col overflow-hidden justify-between rounded-lg shadow-lg'>
       <header className='py-2 px-6 bg-orange-hl text-white font-semibold text-2xl'>{tema.nome}</header>
      <p className='p-6 text-3xl bg-white h-full'>{tema.descricao}</p>
      <p className='p-6 text-3xl bg-white h-full'>Nivel de Urgência: {tema.nivelUrgencia}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-white bg-blue-normal hover:bg-blue-hl flex items-center justify-center py-2 font-semibold'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-white bg-orange-hl hover:bg-orange-normal w-full flex items-center justify-center font-semibold'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas