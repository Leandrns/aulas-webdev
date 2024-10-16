import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const Opcoes = styled.ul`
    display: flex;
`

const Link = styled(RouterLink)`
    text-decoration: none;
    color: #000;
    &:hover {
        color: #007bff;
    }
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao>
                    <Link to={`/${texto.toLowerCase().replace(' ', '')}`}>{texto}</Link>
                </Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader