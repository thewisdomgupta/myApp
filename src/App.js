import './App.css';
import Ano from './components/Ano Folder/Ano';
import Test from './components/Test Folder/Test';
import AppBar from './components/AppBar/AppBar';
import Background from './components/Background/Background';

function App() {
  return (
    <div >
      <AppBar />
      <Background />
      <h1 class="myApp" align="center">
        Hello World
      </h1>
      <Ano />
      <Test />
    </div>

  )
}

export default App;
