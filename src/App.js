import './App.css';
import Home from './componets/home/Home';
import Login from './componets/login/Login';
import SignUp from './componets/signup/SignUp';
import useFetch from './useFetch';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const {data, isPending, error} = useFetch("www.themealdb.com/api/json/v1/1/categories.php")
  console.log(data)
  return (
    <div className="App">
          <BrowserRouter>
           <Routes>
               <Route path='/' element={<SignUp />}/>
               <Route path='login' element={<Login/>}/>
               <Route path='home' element={<Home/>}/>
           </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
