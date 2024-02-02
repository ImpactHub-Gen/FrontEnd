import { User } from "@phosphor-icons/react";
import { Images, Compass } from "@phosphor-icons/react";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

function Home() {
    return (
        <>
        <div className='grid grid-cols-3'>
            <div className='flex h-screen p-32'>
                <div className='border-2 border-black w-full h-2/4 p-10 rounded-lg'>
                    <div className='grid grid-rows-2 justify-items-center'>
                        <User size={48} weight='bold' />
                        Informações do Perfil
                    </div>
                </div>
            </div>
            <div className='h-screen '>
                <div className='grid grid-rows-3 border-2 border-black rounded-lg'>
                    <label htmlFor="titulo" className="hidden">Título</label>
                    <input className="border-2 border-black my-2 mx-5 rounded-full placeholder:leading-3 placeholder:pl-2 pl-2" type="text" name="titulo" placeholder="Título da postagem"/>

                    <label htmlFor="texto" className="hidden">Texto</label>
                    <textarea className='resize-none  border-2 border-black mx-5 rounded-full placeholder:leading-10 placeholder:pl-2 pl-2' name="text" placeholder="Escreva seu texto aqui" />

                    <div className='flex justify-between mx-8'>
                        <div className='flex justify-start gap-8'>
                            <button className='flex flex-row items-center'>
                                <Images size={32} />
                                Imagem
                            </button>
                            <button className='flex flex-row items-center'>
                                <Compass size={32} />
                                Localização
                            </button>
                        </div>
                        <div className='flex border-2 border-black my-2 px-5 rounded-full'>
                                <ModalPostagem />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <ListaPostagens />
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