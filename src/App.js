import MainPage from './pages/MainPage/MainPage'
import './App.css';
import  DonorReg  from './pages/DonorReg/DonorReg';
import UserLogin from './pages/UserLogin/UserLogin';
import UserLoginR from './pages/UserLoginR/UserLoginR';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/'element={<MainPage/>}/> 
            <Route path='/donor-reg'element={<DonorReg/>}/>
            <Route path='/user-login'element={<UserLogin/>}/>  
            <Route path='/user-loginr'element={<UserLoginR/>}/>  
         </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
