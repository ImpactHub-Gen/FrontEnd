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
        <div className='grid grid-cols-3 overflow-y-hidden'>
            <div className='flex h-screen px-32 py-16'>
                <div className='container mx-auto rounded-2xl'>
                    <div className='w-full h-56 object-cover bg-gradient-to-b from-blue-hl to-orange-400 rounded-t-2xl'></div>
                    <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-7rem] border-8 border-white relative z-10' />
                    <div className='relative mt-[-6rem] h-56 flex flex-col bg-gradient-to-t from-blue-hl to-orange-400 text-white text-2xl items-center justify-center rounded-b-2xl'>
                        <p className='mt-7'>{usuario.nome}</p>
                    </div>
                </div>
            </div>
            <div className='h-screen overflow-y-auto hiddenScrollbar'>
               <div>
                    <ListaPostagens posts={postagens} getPosts={buscarPostagens} />
               </div>
            </div>
            <div className='flex h-screen justify-center'>
                <div>
                    <FormularioPostagem posts={postagens} setPosts={setPostagens} />
               </div>
            </div>
        </div>
      </>
    );
}

export default Home;