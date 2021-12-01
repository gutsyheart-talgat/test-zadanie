import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Shtraf from './components/Shtraf';

function App({success}) {
  
  return ( 
    <div className="background">
      <Header/>
      <p className="info">Получение информации о штрафе по УИН</p>
      <Form/>
       <Shtraf/>
    </div>
  );
}

export default App