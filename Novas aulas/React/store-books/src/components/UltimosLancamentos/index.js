import styled from "styled-components";
import imagemLivro from '../../imagens/livro2.png';
import CardRecomenda from '../CardRecomenda';
import { Titulo } from "../Titulo";
import { livros } from "./dadosUltimosLancamentos";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 150px;
        padding: 10px;
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro} />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos