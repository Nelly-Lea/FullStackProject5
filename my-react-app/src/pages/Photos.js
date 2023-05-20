import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Photos() {
  const { albumId } = useParams();

  useEffect(() => {
    // Fetch photos based on the album ID
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [albumId]);

  return <div>Photos Component</div>;
}

