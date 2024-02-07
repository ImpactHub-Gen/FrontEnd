import {ChangeEvent, useContext, useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'
import {RotatingLines} from 'react-loader-spinner'
import UsuarioLogin from '../../models/UsuarioLogin'

function Login() {
    let navigate = useNavigate()

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    const {usuario, handleLogin} = useContext(AuthContext)

    const {isLoading} = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
    
    return (
        <>
            <div className='p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray'>
                <div className="content text-3xl text-center md:text-left">
                <img src="https://media.discordapp.net/attachments/1180165078037827635/1204406380178440222/ImpactHub_Login.gif?ex=65d49dd9&is=65c228d9&hm=7c1eb62b986803a4776a7defa891a6dfa8ec1050ee3bf08eb386bc7c4a3d44ba&=&width=559&height=559"></img>

                </div>
                <form className='shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg container mx-24 items-center' onSubmit={login}>
                    <div className='flex flex-col w-full'>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            className="mb-3 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuarioLogin.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        
                    </div>
                    <div className="flex flex-col w-full">
                        <input 
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="mb-3 py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            
                        />
                    </div>
                    <button type='submit' className='w-full bg-orange-hl hover:bg-orange-400 text-white p-3 rounded-lg font-semibold text-lg flex justify-center'>
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                            /> :
                        <span className='text-xl'>Entrar</span>}
                    </button>
                    <hr className='border-gray-hl w-full my-6'/>
                    <p>
                        Ainda não tem uma conta? {''}
                        <Link to="/cadastro" className="text-blue-normal font-bold  hover:text-blue-hl"> 
                        Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login
