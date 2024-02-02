import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../../utils/toastAlerta";
import { buscar } from "../../../services/Service";
import { Comment } from "react-loader-spinner";

import CardPostagem from "../cardPostagem/CardPostagem";

import Postagem from "../../../models/Postagem";

function ListaPostagens() {
    const [postagens, setPostagens] = useState<Postagem[]>([])

    let navigate = useNavigate()

    const {usuario, handleLogout} = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate('/')
        }
    }, [token])

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
            {postagens.length === 0 && (
                <Comment
                visible={true}
                height="200"
                width="200"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#F4442E"
                />
            )}
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {postagens.map((postagem) => (
                    <CardPostagem key={postagem.id} post={postagem} />
                ))}
            </div>
        </>
    )
}

export default ListaPostagens