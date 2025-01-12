import { useState } from 'react'
import Navbar from './MovieCard/NavbarComponent/Navbar'
import HomePage from './Home/Home'
import './App.css'
import { Routes , Route  } from 'react-router-dom'
import TopRatedPage from './TopRatedPage/TopRatedPage'
import UpcomingPage from './Upcoming/Upcomming'
import MovieDetailPage from './SingleMovieDetailPage/MovieDetailPage'
import Search from './Searchbutton/Search'
function App() {
  

  return (
    <>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/home" element={<HomePage />} /> */}
    <Route path="/topratedpage" element={<TopRatedPage/>} />
    <Route path="/upcomingpage" element={<UpcomingPage/>} />
    <Route path="/movie/:id" element={<MovieDetailPage/>} />
    <Route path="/search" element={<Search/>} />

  </Routes>
</>

   
  )
}
 
export default App
