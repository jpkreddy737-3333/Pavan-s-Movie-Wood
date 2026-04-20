import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Moviedetails.css";

function Moviedetails(){

    const navigate = useNavigate();
    const[details,setMovieDetails] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/shows/${id}`).then(res=> res.json()).then(data=> setMovieDetails(data));
    },[id]);

    if (!details) return <h1 style={{textAlign:"center", fontSize:"108px", margin:"20px auto"}}>Loading...</h1>;
    return (
        
        <div className="details">
            <button className="back" onClick={()=>{
                navigate(-1);
            }}> ⬅Back </button>
            <div className="details-data1"> 
            <img src={details.image?.original} alt="" width={300} />
            <div className="details-data2">
            <h1>{details.name}</h1>
            <p>Language: {details.language}</p>
            <p>Rating:⭐ {details.rating?.average}</p>
            <p>Status: {details.status}</p>
            <p>Summary: {details.summary?.replace(/<[^>]+>/g, "")}</p>
            <h3>🎬 Trailer</h3>
             <iframe height="250" width="400" src="https://www.youtube.com/embed/_8J8LwoVH_0" title="OG Ojas Ghambheera" frameborder="0" allowFullScreen></iframe>
            </div>

        </div>
        </div>
    )
}


export default Moviedetails;