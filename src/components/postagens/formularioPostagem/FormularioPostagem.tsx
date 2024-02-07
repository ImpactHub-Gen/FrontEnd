import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, atualizar, cadastrar } from '../../../services/Service'

import Tema from "../../../models/Tema"
import Postagem from "../../../models/Postagem"
import { toastAlerta } from "../../../utils/toastAlerta"

interface FormularioPostagemProps {
    setPosts?: (value: Postagem[]) => void
    posts?: Postagem[]
}

function FormularioPostagem({ posts, setPosts }: FormularioPostagemProps) {
    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({
        id: 0,
        nome: '',
        descricao: '',
        nivelUrgencia: '',
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        localizacao: '',
        imagem: '',
        data: '',
        tema: null,
        usuario: null,
    })

    async function buscarPostagemPorId(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemaPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemas() {
        await buscar('/temas', setTemas, {
            headers: {
                Authorization: token,
            },
        })
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
        if (id !== undefined) {
            buscarPostagemPorId(id)
            console.log(tema)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        })
    }

    function atualizarEstadoTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
        setPostagem({
          ...postagem,
          [e.target.name]: e.target.value
        })
    
        console.log(JSON.stringify(tema))
      }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id != undefined) {

            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })
                toastAlerta('Postagem atualizada com sucesso', 'sucesso')
                retornar()

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'erro')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar a postagem', 'erro')
                }
            }
        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                toastAlerta('Postagem cadastrada com sucesso', 'sucesso')
//teste
                if (setPosts != undefined && posts != undefined) {
                    setPosts([...posts, postagem])
                }

                setPostagem({
                    id: 0,
                    titulo: '',
                    texto: '',
                    localizacao: '',
                    imagem: '',
                    data: '',
                    tema: null,
                    usuario: null
                })

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'erro')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a postagem', 'erro')
                }
            }
        }
    }

    function retornar() {
        navigate("/home")
      }

    const carregandoTema = tema.descricao === ''

    return (
        <div className='container flex flex-col items-center justify-center mx-auto w-fit bg-white rounded-lg shadow-lg px-11 pb-11 my-16'>
            <h1 className='text-4xl text-center my-8 text-blue-hl'>{id !== undefined ? 'Edite sua publicação' : 'Faça uma publicação!'}</h1>

            <form onSubmit={gerarNovaPostagem} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="titulo" className="font-semibold">Titulo</label>
                    <input 
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="texto" className="font-semibold" >Texto</label>
                    <textarea
                        placeholder="Texto da postagem"
                        rows={5}
                        name='texto'
                        className="w-96 py-3 px-4 border resize-none border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                        value={postagem.texto}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoTextArea(e)}
                     />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="localizacao" className="font-semibold">Localização</label>
                    <input
                        value={postagem.localizacao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}  
                        type="text"
                        placeholder="Localização"
                        name="localizacao"
                        className="py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="imagem" className="font-semibold">Imagem</label>
                    <input 
                        value={postagem.imagem}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
                        type="text"
                        placeholder="Imagem"
                        name="imagem"
                        className="py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="font-semibold">Tema</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione um tema</option>
                        {temas.map((tema) => (
                            <>
                                <option value={tema.id} >{tema.nome}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button disabled={carregandoTema} type='submit' className='py-3 px-4 mt-8 text-lg bg-orange-hl hover:bg-orange-normal focus:outline-none rounded-md focus:ring-1 ring-orange-hl text-white font-semibold'>
                    {carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Publicar'}
                </button>
            </form>
        </div>
    )
}

export default FormularioPostagem