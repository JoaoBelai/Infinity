import Jogador from '../Jogador'
import './Esport.css'

const Esport = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return(
            (props.jogadores.length > 0) && <section className='esport' style={css}>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='jogadores'>
                    {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} funcao={jogador.funcao} imagem={jogador.imagem}/>)}
                </div>
            </section>
    )
}

export default Esport