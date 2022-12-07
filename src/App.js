import MainPage from './pages/MainPage/MainPage'
import './App.css';
import { DonorReg } from './pages';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/'element={<MainPage/>}/> 
            <Route path='/donor-reg'element={<DonorReg/>}/>    
         </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
