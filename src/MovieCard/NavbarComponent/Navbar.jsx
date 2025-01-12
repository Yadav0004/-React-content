import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './index.css'
import { useState } from 'react';
  

function Navbar () {
  const [searchQuery, setSearchQuery] = useState("");
  const [query,setQuery]=useState()
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const value = e.target.value; // Get the input value
    setSearchQuery(value); // Update state

    // Navigate to the search page with the query as state
    if (value.trim() !== "") {
      navigate("/search", { state: { query: value } });
    }
  };
  return (
    <>
    <nav className="navbar">
      <Link to="/" className="logo">
        MovieHub
      </Link>
      
        
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/topratedpage">Top Rated</Link>
        <Link to="/upcomingpage">Upcoming</Link>

      </div>
      <form >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
        <button type="submit">  <Link to="/search">Search</Link>
</button>
      </form>
    </nav>
    </>
  )
}

export default Navbar