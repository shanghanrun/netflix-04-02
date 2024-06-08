
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import AdminLayout from './layout/AdminLayout'
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFound from './pages/NotFound/NotFound';
import ReservePage from './pages/ReservePage/ReservePage';
import ChoicePage from './pages/ChoicePage/ChoicePage';
// import ChoicePage2 from './pages/ChoicePage/ChoicePage2';
import MyPage from './pages/MyPage/MyPage';
import TimePage from './pages/TimePage/TimePage';

//홈페이지    /
//영화전체 보여주는 페이지(서치)   /movies
//영화디테일 페이지    /movies/:id
//추천영화 /movies/:id/recommendation
//리뷰 /movies/:id/reviews
function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path='movies'>
          <Route index element={<MoviesPage/>} />
          <Route path=':id' element={<MovieDetail/>} />
        </Route>
        <Route path='/time' element={<TimePage />}/>
        <Route path='/choice' element={<ChoicePage />}/>
        <Route path='/reserve' element={<ReservePage />}/>
        <Route path='/mypage' element={<MyPage />}/>
      </Route> 
      
      <Route path='/admin' element={<AdminLayout/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
