import './App.css';
import { Firstpage } from './MyComponents/FirstPage/Firstpage';
import { Footer } from './MyComponents/Footer/Footer';
import { Question } from './MyComponents/LastPage/Question';
import { Secondpage } from './MyComponents/SecondPage/Secondpage';

function App() {
  return (
    <div>
      <Firstpage/>
      <Secondpage/>
      <Question/>
      {/* <Footer/> */}
    </div>
    );
  }

export default App;
