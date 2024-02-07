import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { Trash, Hash, MapPin, ChatCircleDots, ShareFat} from '@phosphor-icons/react'
import { GoHeartFill } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
interface CardPostagemProps {
    post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {

    const [iconColor, setIconColor] = useState('gray'); // Estado para controlar a cor do ícone

    const handleClick = () => {

    setIconColor(iconColor => iconColor === 'gray' ? 'red' : 'gray'); // Toggle the color of the icon

  };

  let locationComponent

    if(post.localizacao !== "") {
      locationComponent = (
        <div className="flex items-center">
            <MapPin size={22} weight="bold" />
            <p className="font-semibold">{post.localizacao}</p>
        </div>
      )
    } 


    return (
        <div className='flex flex-col overflow-hidden justify-between bg-white rounded-lg shadow-lg'>
            <div>
                <div className='flex w-full text-white py-2 px-4 items-center justify-between gap-4 border-b bg-orange-hl'>
                    <div className="flex justify-center items-center">
                        <img src={post.usuario?.foto} className='h-12 rounded-full border-2 border-white' alt="" />
                        <h3 className='text-lg font-semibold text-center pl-3'>{post.usuario?.nome} </h3>
                    </div>
                    <div className="flex">
                        <Link to={`/editarPostagem/${post.id}`} className="pr-3">
                            <FiEdit size={26}/>
                        </Link>
                        <Link to={`/deletarPostagem/${post.id}`} className="">
                            <Trash size={28}/>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h4 className='text-lg font-semibold pl-3 pt-3'>{post.titulo}</h4>
                    <p className="pl-3 py-3">{post.texto}</p>
                    <img src={post.imagem} alt="" className="object-cover w-full max-h-96 px-1 rounded"/>
                    <div className="flex items-center p-2 cursor">
                    {locationComponent}
                    </div>
                    <div className="flex items-center p-2">
                    <Hash size={22} weight="bold"/>
                    <p className="font-bold pl-1 uppercase">{post.tema?.nome}</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <Link to={`#`} className='w-full text-white font-semibold bg-gray flex items-center justify-center py-3'>
                    <GoHeartFill size={32} color={iconColor} onClick={handleClick}/>
                </Link>
                <Link to={`#`} className='w-full text-white font-semibold bg-blue-normal hover:bg-blue-hl flex items-center justify-center'>
                    <ChatCircleDots size={32} color="white"/>
                </Link>
                <Link to={`#`} className='text-white bg-orange-hl hover:bg-orange-normal font-semibold w-full flex items-center justify-center'>
                    <ShareFat size={32} />
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem