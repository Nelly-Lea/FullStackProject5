import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Photos.css"; // Import the CSS file for styling

export function Photos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const initialLoadCount = 10; // Number of photos to load initially
  const loadCountIncrement = 5; // Number of additional photos to load on each "Load More" click

  useEffect(() => {
    fetchPhotos();
  }, [albumId]);

  const fetchPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setVisiblePhotos(data.slice(0, initialLoadCount));
        setLoadMoreVisible(data.length > initialLoadCount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoadMore = () => {
    const currentLength = visiblePhotos.length;
    const newVisiblePhotos = photos.slice(0, currentLength + loadCountIncrement);
    setVisiblePhotos(newVisiblePhotos);
    setLoadMoreVisible(photos.length > newVisiblePhotos.length);
  };

  return (
    <div className="photos-container">
      <h2 className="photos-heading">Photos</h2>
      <ul className="photos-list">
        {visiblePhotos.map((item) => (
          <li key={item.id} className="photo-item">
            <div className="photo-thumbnail">
              <img src={item.thumbnailUrl} alt={item.title} />
            </div>
            <p className="photo-title">{item.title}</p>
          </li>
        ))}
      </ul>
      {loadMoreVisible && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
