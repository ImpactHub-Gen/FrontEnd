import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-5xl text-center my-4 text-blue-hl mb-12'>Deletar tema</h1>

            <p className='text-center text-3xl font-semibold mb-12'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='flex flex-col overflow-hidden justify-between rounded-lg shadow-lg'>
                <header className='py-2 px-6 bg-orange-hl text-white font-semibold text-2xl'>Tema</header>
                <p className='p-6 text-3xl bg-white h-full'>{tema.descricao}</p>
                <div className="flex">
                    
                    <button className='text-white bg-orange-hl hover:bg-orange-normal w-full flex items-center justify-center font-bold' onClick={deletarTema}>
                        Sim
                    </button>
                    <button className='w-full text-white bg-blue-normal hover:bg-blue-hl flex items-center justify-center py-2 font-bold' onClick={retornar}>Não</button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema