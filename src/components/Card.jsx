// import {react.svg} from "./assets/react.svg"
// https://itunes.apple.com/search?term=drake+iceman&media=music&entity=album&limit=1
// data.results[0].artistName
// data.results[0].collectionName
// data.results[0].artworkUrl100

import { useEffect, useState } from 'react';
import album from '../utils/itunesApi';

function Card() {
  const [cover, setCover] = useState();

  useEffect(() => {
    async function api() {
      const name = 'drake+iceman';
      const music = await album(name);
      setCover(music.results[0]);
    }
    api();
  }, []);

  if (!cover) {
    return <p>Loading...</p>; // Prevents the crash!
  }
  return (
    <div>
      <img src={cover.artworkUrl100} alt="" />
      <p>{cover.collectionName}</p>
    </div>
  );
}

export default Card;
