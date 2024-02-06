import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
    post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
    return (
        <div className='flex flex-col overflow-hidden justify-between bg-white rounded-lg shadow-lg'>
            <div>
                <div className='flex w-full bg-orange-hl py-2 px-4 items-center gap-4'>
                    <img src={post.usuario?.foto} className='h-12 rounded-full' alt="Foto de perfil do usuário" />
                    <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome} </h3>
                </div>
                <div>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.texto}</p>
                    <img src={post.imagem} alt="Foto da Postagem" className="w-" />
                    <p>{post.localizacao}</p>
                    <p>Tema: {post.tema?.nome}</p>
                    
                </div>
            </div>
            <div className='flex'>
                <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem