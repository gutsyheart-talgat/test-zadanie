import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Shtraf from './components/Shtraf';
import Failed from './components/Failed';
import Load from './components/Load'
import {connect} from 'react-redux'

function App({success,shtraf,failed,load}) {
  console.log(failed)
  return ( 
    <div className="background">
      <Header/>
      <p className="info">Получение информации о штрафе по УИН</p>
      <Form/>
      {success && <Shtraf shtrafy={shtraf}/>}
      {failed && <Failed/>}
      {load && <Load/>}
      
    </div>
  );
}

const mapStateToProps = (state) => ({ 
  success: state.shtraf.success,
  shtraf:state.shtraf.data,
  failed:state.shtraf.failed,
  load:state.shtraf.load
}) 
export default connect(mapStateToProps, null)(App)