import './App.css';
import React,{useState} from 'react';
function App() {
  const[search,setSearch]=useState("");
  const[data,setData]=useState([]);
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(r=>r.json()).then(value=>setData(value.Search))
  }
  return (
    <div>
    <center>
            <h1 style={{color:"seaGreen"}}>Find Your Favorite Movies</h1>

    <form  onSubmit={submitHandler}>
      
      <input type="text" className="container" placeholder='Search Movies' size="40" value={search} onChange={(e)=>setSearch(e.target.value)}/>&nbsp;
      <input type="submit" className='container' size="33" value="search"/>
     
    </form>
    <div className="row">
    {data.map(item =>
    <div className='col-md-4'>
        <div class="card" style={{"width": "18rem"}}>
        <img src={item.Poster} class="card-img-top" className='max' alt={item.Title} />
        
         <div class="card-body">
         <h4 className="card-title">{item.Title}</h4>
         <h6>{item.Year}</h6>
        </div>
      </div>
      </div>
    )}
    </div>
    </center>
    </div>
    
  );
}

export default App;
