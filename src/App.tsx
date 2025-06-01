import './App.css';
import { Header } from './layout/header/Header';
import {Main} from "./layout/section/main/Main.tsx";
import {Tech} from "./layout/section/tech/Tech.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contacts} from "./layout/section/contact/Contacts.tsx";

function App() {
  return (
    <div className="App">
      <Header />
        <Main/>
        <Tech/>
      <Projects/>
        <Contacts/>
    </div>
  );
}

export default App;
