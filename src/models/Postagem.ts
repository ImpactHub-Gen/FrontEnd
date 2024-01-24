import Tema from './Tema'
import Usuario from './Usuario';

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    localizacao: string;
    imagem: string;
    data: string;
    tema: Tema | null;
    usuario: Usuario | null;
}