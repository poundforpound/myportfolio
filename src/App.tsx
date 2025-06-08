import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main.tsx';
import { Tech } from './layout/section/tech/Tech.tsx';
import { Projects } from './layout/section/projects/Projects.tsx';
import { Contacts } from './layout/section/contact/Contacts.tsx';
import { Footer } from './layout/footer/Footer.tsx';
import {Particle} from "./components/particle/Particle.tsx";

function App() {
  return (
    <div className="App">
        <Particle />
      <Header />
      <Main />
      <Tech />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
