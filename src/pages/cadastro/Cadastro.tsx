import {ChangeEvent, useEffect, useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {cadastrarUsuario} from '../../services/Service'
import {RotatingLines} from 'react-loader-spinner'
import Usuario from '../../models/Usuario'

function Cadastro() {

    let navigate = useNavigate()

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        senha: "",
        email: "",
        foto: "",
        tipo: "Pessoa física",
        telefone: ""
    })

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: "",
        senha: "",
        email: "",
        foto: "",
        tipo: "",
        telefone: ""
    })

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            retornar()
        }
    }, [usuarioResposta])

    function retornar() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        setIsLoading(true)

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            
            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
                alert('Usuário cadastrado com sucesso')
            } catch (error) {
                console.log(error)
                alert('Erro ao cadastrar o Usuário')
            }
        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro')
            setUsuario({...usuario, senha:""})
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }
    return (
        <>
            <div className='w-screen h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray'>
                <h2 className='text-orange-hl font-bold text-6xl mb-12'>ImpactHub</h2>
                <form className='flex justify-center items-center flex-col w-1/3 gap-3 bg-white p-5 rounded-lg shadow-lg' onSubmit={cadastrarNovoUsuario}>
                    <p className='text-black text-2xl justify-center font-semibold'>Criar uma nova conta</p>
                    <hr className='border-gray-hl w-full my-3'/>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="tipo" className='font-semibold mb-2'>Tipo de conta</label>
                        <div>
                            <label htmlFor="pessoafisica" className='mr-2 mt-2'>
                                <input 
                                    type="radio"
                                    id="pessoafisica"
                                    name="tipo"
                                    value="Pessoa Física"
                                    defaultChecked
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    className='mr-1 accent-orange-600'
                                />
                                Pessoa Física
                            </label>
                            <label htmlFor="instituicao" className='ml-2'>
                                <input 
                                    type="radio"
                                    id="instituicao"
                                    name="tipo"
                                    value="Instituição"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    className='mr-1 accent-orange-600'
                                />
                                Instituição
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <input 
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="mt-2 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <input 
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Link da sua foto de perfil"
                            className="mt-2 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            className="mt-2 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuario.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <input 
                            type="text"
                            id="telefone"
                            name="telefone"
                            placeholder="Telefone"
                            className="mt-2 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuario.telefone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <input 
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="mt-2 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <input 
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirme sua senha"
                            className="mt-2 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8 my-5">
                        <button className='rounded text-white bg-orange-hl hover:bg-orange-400 w-1/2 py-2 flex justify-center' type='submit'>
                             {
                                isLoading ? <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> : 
                                    <span>Cadastrar</span>}
                        </button>
                    </div>
                    <hr className='border-gray-hl w-full'/>
                    <div className='mt-2'>
                        <p className='hover:text-orange-hl cursor-pointer' onClick={retornar}>Já possui uma conta?</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro