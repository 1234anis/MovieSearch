import React,{useEffect} from 'react';
import './App.css';

//http://www.omdbapi.com/?t=the%20avengers&apikey=a24fa3d6
const App = () => {

  const [movieInfo,setMovieInfo]=React.useState(null);
  const[title,setTitle]=React.useState("the avengers")
  useEffect(() => {

  getmovieData();

  },[])

  const readTitle=(value)=>{
    setTitle(value);
    console.log(value);

  }
  const getmovieData=()=>{
    const url=`http://www.omdbapi.com/?t=${title}&apikey=a24fa3d6`
   
    fetch(url).then((res)=>res.json())
   .then((movie)=>{
   setMovieInfo(movie);
   console.log(movie)
   }).catch((e)=>{
     console.log(e);
   })
  }
  return (<>
  <div className="App">
    <div className="container">
      <div className="padd">
        <h1>Movie Search</h1>
        <div className="input-group">
          <input type="text" placeholder="Enter Movie Name" onChange={(e)=>{ readTitle(e.target.value)}}  className="search-field"/>
         <button className="btn" onClick={getmovieData}>Get Movie</button>
        </div>
        {
          movieInfo?.Error===undefined?(
        
        <div className="movie" key={Math.random()}>
          <div className="poster">
           <img src={movieInfo?.Poster} alt="movieImg" className="img1" />
          </div>
          <div className="details">
            <div className="padd">
              <h1>{movieInfo?.Title}</h1>
              <p><strong>Genre</strong> :{movieInfo?.Genre}</p>
              <p> <strong>Directed By</strong> :{movieInfo?.Director}</p>
              <p><strong>Plot</strong> :{movieInfo?.Plot}</p>
              <p> <strong>Actors</strong> :{movieInfo?.Actors}</p>
              <p><strong>Collection</strong> :{movieInfo?.BoxOffice}</p>
              <p><strong>language</strong> :{movieInfo?.Language}</p>
              <p><strong>Released Date</strong> :{movieInfo?.Released}</p>
              <p><strong>Runtime</strong> :{movieInfo?.Runtime}</p>
              <div className="ratings">
              {
                movieInfo?.Ratings.map((rating,index)=>(

                  <div>
                  <strong>{rating.Source}</strong>
                  <h3>{rating.Value}</h3>
                </div>
                ))
              }
               
               
              </div>
            </div>
          </div>
        </div>
          ):
          (
            <h1>Movie not Found</h1>
          ) 
        }
     </div>
    </div>
  </div>
  </>
  )
}

export default App
