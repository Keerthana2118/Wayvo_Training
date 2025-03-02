import React, {useState} from 'react';
function Api(){
    const [Artist, setArtist] =useState("");
    const [Name,setName]=useState("");
    const [TotalFollowers,setTotalFollowers]=useState("");
    const [Image,setImage]=useState("");
    const handleEvent=(event)=>{
        event.preventDefault();
        getArtist();
        setArtist("");
    }
    async function getArtist(){
        const response = await fetch("https://spotify-api-wrapper.appspot.com/artist/"+Artist);   
        const data=await response.json();
        const Aname= await data.artists.items[0].name; 
        const Afollow= await data.artists.items[0].followers.total;
        const Aimage= await data.artists.items[0].images[0].url;
        setName(Aname);
        setTotalFollowers(Afollow);
        setImage(Aimage);
    }
    return(
        <div>
        <h1>Spotify Artist</h1>
        <form onSubmit={handleEvent}>
            <input type="text" placeholder="enter Name of the artist" value={Artist} onChange={(event)=>setArtist(event.target.value)}/>
            <input type="submit"/>
        </form>
        <h1>{Name}</h1>
        <h4>TotalFollowers : {TotalFollowers}</h4>
        <img src={Image} alt=""/>
        </div>
    );
}
export default Api;