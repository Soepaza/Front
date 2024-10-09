import logo from './logo.svg';
import './App.css';
import CadastroUser from './components/CadastroUser';

function App() {
  return (
    <div className="App">
      <CadastroUser/>
      <h3 id='tittle'>
      VÍDEO: dirigível contratado pelo time do São Paulo cai em bairro de Osasco
      </h3>
      De acordo com o Corpo de Bombeiros, a queda foi registrada no bairro Veloso por volta do meio-dia; 
      uma pessoa foi socorrida com ferimentos leves. 
      
      <p>Em nota, São Paulo Futebol Clube <b><i>lamentou acidente.</i></b>
      </p>

      Leia mais em: <a target='_blank' href='https://g1.globo.com/sp/sao-paulo/noticia/2024/09/25/video-dirigivel-do-time-sao-paulo-cai-em-bairro-de-osasco-na-grande-sp.ghtml'>O globo</a>
    </div>
  );
}

export default App;
