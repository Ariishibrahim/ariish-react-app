  import './App.css';
import Clicker from './components/Clicker';
import {Tiriye} from './components/Counter';
  import Greetings from "./components/Greetings";
  import Header from './components/Header';
import ThemeToggle from './components/ThemeSwitcher';
import Inputer from './components/Inputer';
import WelcomeMessage from './components/Welcome Message';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';


function App() {

  return (
    <>
    <ThemeToggle/>
    <Header />
    <Notification hasNewMessages={true}/>
    <Dashboard isLoggedIn={true}/>
    <Inputer/>
    <Greetings name= "Ariish" surname = "Dahir" />
    <WelcomeMessage isLoggedIn={true}/>
    <Clicker/>
    <Tiriye/>
    </>
  );

}

export default App;