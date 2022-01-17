import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import FaventinePage from "./pages/FaventinePage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ZerosixPage from './pages/ZerosixPage';
import EtapesPrintPage from './pages/EtapesPrintPage';
import CourrierPlusPage from './pages/CourrierPlusPage';
import FiaacPage from './pages/FiaacPage';
import LaReservePage from './pages/LaReservePage';
import LeBoncoinPage from './pages/LeBoncoinPage';


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
        <Route path="/le-boncoin" element={<LeBoncoinPage/>}/>
        <Route path="/fiaac" element={<FiaacPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
