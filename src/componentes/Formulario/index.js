import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) =>{

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [esport, setEsport] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            funcao,
            imagem,
            esport
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setEsport('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card do jogador</h2>

                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do jogador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}  
                    label="Função" 
                    placeholder="Digite a função do jogador"
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="E-sport" 
                    itens={props.esports}
                    valor={esport}
                    aoAlterado={valor => setEsport(valor)}
                />

                <Botao>
                    Criar Card    
                </Botao>

            </form>
        </section>
    )
}

export default Formulario