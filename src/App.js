import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import FaventinePage from "./pages/FaventinePage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ZerosixPage from './pages/ZerosixPage';


const App =()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/faventine-joaillerie" element={<FaventinePage/>}/>
        <Route path="/zerosix" element={<ZerosixPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
