import { User } from "@phosphor-icons/react";

function Home() {
    return (
        <>
        <div className='grid grid-cols-3'>
            <div className='border-2 border-black h-screen p-20'>
                <div className='border-2 border-black h-4/5 p-20'>
                    <User size={48} weight='bold' />
                    Informações do Perfil
                </div>
            </div>
            <div className='border-2 border-black h-screen p-8'>
                <div className='border-2 border-black h-2/5'>
                    <h2 className='text-lg font-bold m-2'>Titulo</h2>
                    <textarea className='border-2 border-black m-8' name="text" rows={4} cols={55} placeholder="Escreva seu texto aqui" />
                </div>
            </div>
            <div className='border-2 border-black h-screen'></div>
        </div>
      </>
    );
}

export default Home;