import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export function Photos (){
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userid =user.id;
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      try {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos(data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }, [id]);
  
    const handleBackClick = () => {
      navigate(`users/:${userid}/albums`);
    };
  
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div>
        <button onClick={handleBackClick}>Back to Albums</button>
        <div className="photo-list">
          {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <span>{photo.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

