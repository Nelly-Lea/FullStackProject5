import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Photos() {
  const  {albumId}  = useParams();
  const[photos, setPhotos]= useState([])
  //console.log(albumId.albumsId)

  useEffect(() => {
    // Fetch photos based on the album ID
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data
        //console.log(data);
        setPhotos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (<div>
  <div>Photos Component</div>
<ul>
    {photos.map((item)=>{return <li key={item.id}><div>

        <img src={item.thumbnailUrl}></img>
        <p className="font_color">{item.title}</p>
    </div></li>})}
</ul>
  </div>);
}

