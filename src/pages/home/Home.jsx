import "./Home.css";
import {useNavigate} from "react-router-dom";



function Home(){

    const navigate = useNavigate();
    
    return(
        <div className="home-data">
        <div className="home-1data">
            <h1>🎬 Movie Wood</h1>
        </div>
        <div className="home-2data">
            <input type="text" placeholder="Click on Search " />
            <button onClick={()=>{
                navigate(`/movie`);
            }}>Search</button>
        </div>
        <div className="home-3data">
            <h4>All Ott Platforms are Available</h4>
        </div>
        <div className="home-patforms">
            <div onClick={()=>{
                navigate("/movie/netflix");
            }}
            style={{cursor:"pointer"}}>
                <img src="https://th.bing.com/th/id/OIP.k-SSSrjNRDim54CUWJk3DAHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" height="150px" width="250px" />
                <h1>NETFLIX</h1>
            </div>
            <div onClick={()=>{
                navigate("/movie/prime");
            }}
            style={{cursor:"pointer"}}>
                <img src="https://tse2.mm.bing.net/th/id/OIP.NRJFMm-vF6680t87QoEAEQHaFj?pid=ImgDet&w=187&h=140&c=7&dpr=1.3&o=7&rm=3" alt="" height="150px" width="250px" />
                <h1>PRIME</h1>
            </div>
            <div onClick={()=>{
                navigate("/movie/hotstar");
            }}
            style={{cursor:"pointer"}}>
                <img src="https://th.bing.com/th/id/OIP.9IEf9KF395A-Cj69_1cp7AHaEH?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" height="150px" width="250px" />
                <h1>HOTSTAR</h1>
            </div>
            <div onClick={()=>{
                navigate("/movie/others");
            }}
            style={{cursor:"pointer"}}>
                <img src="https://th.bing.com/th/id/OIP.2TPg916IKvRirvcMlUeW4gHaDa?w=345&h=161&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" height="150px" width="250px"/>
                <h1>OTHERS</h1>
            </div>
        </div>
       </div>
    )
}

export default Home;