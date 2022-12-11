import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import UserLogin from './components/login/login';
import NotFound from './components/notfonund/notfound';
import UserReg from './components/register/register';
import AddMovie from './components/addMovie/addMovie'
import { ToastContainer} from 'react-toastify';
import DeleteMovie from './components/deletetMovie/deleteMovie';
import EditMovie from './components/editmovie/editmovie';
import Movies from './components/movies/movies';

function App() {
  return (
    <main className="App">
    <ToastContainer
 position="top-center"
autoClose={9000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
  <Routes>
     <Route path='/' element={<Homepage/>}/>
       <Route path='/movies' element={<Movies/>}/>
       <Route path='/movies/addmovie' element={<AddMovie/>}/>
       <Route path='/movies/deletemovie' element={ <DeleteMovie/>}/>
       <Route path='/movie/updatemovie' element={  <EditMovie/>}/>
    

      <Route path='/users/register' element={<UserReg/>}/>
      <Route path='users/login' element={<UserLogin/>}/>
      <Route path='/*' element={<NotFound/>}/>

  </Routes>
 
    </main>
  );
}

export default App;
