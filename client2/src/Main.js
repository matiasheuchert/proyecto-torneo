import App from './App';
import Handball from './Handball';
import Basquet from './Basquet';
import EquiposHandball from './EquiposHandball';
import EquiposBasquet from './EquiposBasquet';
import {Routes, Route, Switch} from 'react-router-dom';

function Main() {
  return (
    <Routes>
      <Route path="/handball" element={<Handball />} />
    <Route path="/Basquet" element={<Basquet />} />
    <Route path="/handball/equipos" element={<EquiposHandball />} />
    <Route path="/basquet/equipos" element={<EquiposBasquet />} />
    <Route path="/" element={<App />} />


  </Routes>
  );



}

export default Main;
