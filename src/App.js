import './App.css';
import { Firstpage } from './MyComponents/FirstPage/Firstpage';
import { Question } from './MyComponents/LastPage/Question';
import { Secondpage } from './MyComponents/SecondPage/Secondpage';

function App() {
  return (
    <div>
      <Firstpage/>
      <Secondpage/>
      <Question/>
    </div>
    );
  }

export default App;
