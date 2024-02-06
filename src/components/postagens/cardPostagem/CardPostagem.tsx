import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
    post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
    return (
        <div className='flex flex-col overflow-hidden justify-between bg-white rounded-lg shadow-lg'>
            <div>
                <div className='flex w-full bg-white py-2 px-4 items-center gap-4 border-b border-orange-hl'>
                    <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-semibold text-center'>{post.usuario?.nome} </h3>
                </div>
                <div className=" p-4">
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.texto}</p>
                    <img src={post.imagem} alt="Foto da Postagem" className="" />
                    <p className="font-semibold" >{post.localizacao}</p>
                    <p className="font-semibold inline-block" >Tema: <p className="inline-block font-normal">{post.tema?.nome}</p></p>
                    
                </div>
            </div>
            <div className='flex'>
                <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-blue-hl hover:bg-blue-normal font-semibold flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-orange-hl hover:bg-orange-normal font-semibold w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem