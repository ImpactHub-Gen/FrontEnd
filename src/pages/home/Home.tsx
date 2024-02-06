import { User } from "@phosphor-icons/react";
import { Images, Compass } from "@phosphor-icons/react";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import { useContext, useEffect, useState } from "react";
import Postagem from "../../models/Postagem";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import FormularioPostagem from "../../components/postagens/formularioPostagem/FormularioPostagem";

function Home() {

    const [postagens, setPostagens] = useState<Postagem[]>([])

    const { usuario } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'erro')
            }
        }
    }

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])
    return (
        <>
        <div className='grid grid-cols-3'>
            <div className='flex h-screen p-32'>
                <div className='border-2 border-black w-full h-2/4 p-10 rounded-lg'>
                    <div className='grid grid-rows-2 justify-items-center max-h-full'>
                        <div className='flex items-center'>
                            <img src={usuario?.foto} className='h-28 w-28 rounded-full' alt="Foto de perfil do usuário" />
                        </div>
                        <div className='flex items-center'>
                            {usuario.nome}
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-screen overflow-y-auto'>
               <div>
                    <FormularioPostagem posts={postagens} setPosts={setPostagens} />
               </div>
               <div>
                    <ListaPostagens posts={postagens} getPosts={buscarPostagens} />
               </div>
            </div>
            <div className='flex h-screen p-20 justify-center'>
                <div className='border-2 border-black w-full h-2/4 p-20 rounded-lg'>
                    <div className='grid grid-rows-2 justify-items-center'>
                        <Images size={48} weight='bold' />
                        Postagens prioritárias
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Home;