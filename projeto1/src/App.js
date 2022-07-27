import { useState } from 'react';
import './App.css';
import { ModalTemplate } from './componets/ModalTemplate';



function App() {
  const [livro, setLivro] = useState ({nome: '1884' , autor:'Gromel'})
  return (
    <div className="App">
      <ModalTemplate data={livro}/>
    </div>
  );
}

export default App;
