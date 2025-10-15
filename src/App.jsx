import './App.css';
import Lista from './components/Lista';

function App() {
  const meusItens = ['Minecraft', 'Hollow knight', 'Gta San Andreas', 'Dark souls 3', 'God of war 2', 'Batman Arkham Knight', 'Resident Evil 7', 'Silent hill 2'];

  return (
    <div className='Apps'>
      <div className='bloco'>
        <div className='content'>
          <h1>Renderização de Lista</h1>
          <h2>Melhores Jogos</h2>
          <Lista itens={meusItens} />
          <Lista itens={[]} />
        </div>

        <div className='image-container'>
          <img src="../public/minezin.png" alt="Minecraft" className="image" />
          <img src="../public/hollowknight.gif" alt="Hollow Knight" className="image" />
         
        </div>
      </div>

      <div className='bloco'>
        
      </div>
    </div>
  );
}

export default App;


