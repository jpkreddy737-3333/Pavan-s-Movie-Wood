import { useState,useEffect } from "react";
import "./Movie.css";
import { useNavigate,useParams } from "react-router-dom";

function Movie(){

    const [search,setSearch] = useState("");
    const {platform} = useParams();
    const [movieState,setMovie] = useState([]);
    const navigate = useNavigate();


    const filteredMovies = movieState.filter((movie)=>{
        if(platform === "netflix") return movie.language === "English";
        if(platform === "prime") return movie.genres.includes("Drama");
        if(platform === "hotstar") return movie.genres.includes("Action");
        return true;
    })
    .filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

    useEffect(()=>{
        fetch("https://api.tvmaze.com/shows").then(
            (res)=> res.json())
            .then((data)=>{
                setMovie(data);
            })
        .catch(
            (error)=>{
                console.log(error);
            }
        );

    },[])
    return (
        <div  >
            <h1 style={{textAlign:"center",fontSize:"38px", fontWeight:"800",color:"red"}}>🔥 HOLLYWOOD ADDA  🔥</h1>
            <div className="movie-search">
                <input type="text" placeholder="Search Movie..." value={search} onChange={(e)=>{
                setSearch(e.target.value);
            }} />
            <button>Search</button>
            </div>
            <div className="movie-data1">
                 {
                filteredMovies.map((movie)=>{
                   return(
                     <div className="movie-data2"  key={movie.id} onClick={()=>{
                            navigate(`/movie-details/${movie.id}`);
                        }}>
                        <img src={movie.image?.medium} alt=""  height={180} width={100}/>
                        <h3>{movie.name}</h3>
                    </div>
                   )
                })
            }
            </div>
        </div>
    )
}

export default Movie;