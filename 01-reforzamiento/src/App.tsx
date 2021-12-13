// import { ObjetosLiterales } from "./typesScript/ObjetosLiterales";
// import { Funciones } from './typesScript/Funciones';
// import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';

const App = () => {
  return <div className="mt-2">
    <h1>Intro a TypeScript</h1>
    <hr/>
    {/* <ObjetosLiterales/> */}
    {/* <Funciones/> */}
    {/* <Contador/> */}
    <ContadorConHook/>
  </div>;
};

export default App;
