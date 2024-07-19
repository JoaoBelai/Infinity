import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Esport from './componentes/Esport';
import Rodape from './componentes/Rodape';


function App() {

  const esports = [
    {
      nome: 'CS2',
      corPrimaria: '#4349DD',
      corSecundaria: '#E7E7FD'
    },
    {
      nome: 'Valorant',
      corPrimaria: '#e06b69 ',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Lol',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Rainbow Six',
      corPrimaria: '#5A5963',
      corSecundaria: '#ACACB1'
    },
    {
      nome: 'Overwatch',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
    {
      nome: 'Rocket League',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'COD Warzone',
      corPrimaria: '#373741',
      corSecundaria: '#93939A'
    }
  ]

  const [jogadores, setJogadores] = useState([])
  
  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">

      <Banner/>

      <Formulario esports={esports.map(esport => esport.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {esports.map(esport => <Esport 
        key={esport.nome} 
        nome={esport.nome} 
        corPrimaria={esport.corPrimaria} 
        corSecundaria={esport.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.esport === esport.nome)}
      />)}

      <Rodape/>

    </div>
  );
}

export default App;
