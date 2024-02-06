import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(tema))
  }

  function atualizarEstadoTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(tema))
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Tema atualizado com sucesso', 'sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar o Tema', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Tema cadastrado com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrado o Tema', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/temas")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);
console.log(tema)
  return (
      <div className="container flex flex-col items-center justify-center mx-auto w-fit bg-white rounded-lg shadow-lg px-16 pb-16">
        <h1 className="text-4xl text-center my-8 text-blue-hl">
          {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
        </h1>
        <form className="flex flex-col gap-4" onSubmit={gerarNovoTema}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className='font-semibold'>Tema</label>
            <input
              type="text"
              placeholder="Tema da postagem"
              name='nome'
              className="py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
              value={tema.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className='w-full font-semibold'>Descrição do tema</label>
            <textarea
              placeholder="Descrição"
              rows={5}
              name='descricao'
              className="w-96 py-3 px-4 border resize-none border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
              value={tema.descricao}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoTextArea(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nivelUrgencia" className='font-semibold'>Nível de urgência</label>
            <input
              type="text"
              placeholder="Baixo/Médio/Alto"
              name='nivelUrgencia'
              className="py-3 px-4 border border-gray-hl focus:outline-none rounded-md focus:ring-1 ring-orange-hl"
              value={tema.nivelUrgencia}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button
            className="rounded text-white bg-orange-hl hover:bg-orange-normal font-semibold w-80 py-3 mt-12 mx-auto block"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </form>
      </div>
  );
}

export default FormularioTema;