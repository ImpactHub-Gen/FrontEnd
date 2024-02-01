import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    senha: string;
    email: string;
    foto: string;
    tipo: string;
    telefone: string;
    postagem?: Postagem | null;
}