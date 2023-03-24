
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './component/home.jsx';
import Header from './component/header';
import Sample from './component/Sample.jsx';
import Implementation from './component/Implementation';
import ShowDetails from './component/showDetail.jsx';
import Progress from './component/progress.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
             <Route path="/" element={<Home/>}/>   
             <Route path="/sample" element={<Sample/>}/>
             <Route path="/sampleimplement" element={<Implementation/>}/>
             <Route path="/showdetails" element={<ShowDetails/>}/>
             <Route path="/progress/:id" element={<Progress/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
