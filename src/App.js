import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FaventinePage from "./pages/FaventinePage";
import ZerosixPage from './pages/ZerosixPage';
import EtapesPrintPage from './pages/EtapesPrintPage';
import CourrierPlusPage from './pages/CourrierPlusPage';
import EggshotPage from './pages/EggshotPage';
import FiaacPage from './pages/FiaacPage';
import LaReservePage from './pages/LaReservePage';
import LeBoncoinPage from './pages/LeBoncoinPage';
import MuchosTacosPage from './pages/MuchosTacosPage';


const App =()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/faventine-joaillerie" element={<FaventinePage/>}/>
        <Route path="/zerosix" element={<ZerosixPage/>}/>
        <Route path="/la-reserve-de-la-chapelle" element={<LaReservePage/>}/>
        <Route path="/etapes-print" element={<EtapesPrintPage/>}/>
        <Route path="/courrier-plus" element={<CourrierPlusPage/>}/>
        <Route path="/eggshot" element={<EggshotPage/>}/>
        <Route path="/le-boncoin" element={<LeBoncoinPage/>}/>
        <Route path="/fiaac" element={<FiaacPage/>}/>
        <Route path="/muchos-tacos" element={<MuchosTacosPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
