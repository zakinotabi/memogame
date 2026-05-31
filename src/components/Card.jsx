// import {react.svg} from "./assets/react.svg"
// https://itunes.apple.com/search?term=drake+iceman&media=music&entity=album&limit=1
// data.results[0].artistName
// data.results[0].collectionName
// data.results[0].artworkUrl100

import { useEffect, useState } from 'react';
import album from '../utils/itunesApi';
import albumIds from '../utils/albumIds';

function Card({ totalCards }) {
  const [covers, setCovers] = useState();

  const generateRandom = () => {
    // 1. Fill an array with numbers 0 to 59
    const pool = Array.from({ length: albumIds().length }, (_, i) => i);
    const result = [];

    for (let i = 0; i < (totalCards || 10); i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      const pickedNumber = pool.splice(randomIndex, 1)[0];
      result.push(pickedNumber);
    }
    return result;
  };

  useEffect(() => {
    (async () => {
      const randomNumbers = generateRandom();
      const ids = albumIds();
      const albumPromises = randomNumbers.map((num) => album(ids[num]));
      const musicData = await Promise.all(albumPromises);
      const results = musicData.map((each) => each.results[0]);
      setCovers(results);
    })();
  }, [totalCards]);

  const [orderValue, setOrderValue] = useState(generateRandom());

  return (
    <div>
      <h2>Music Albums</h2>
      <div className="cards-container">
        {covers &&
          // only rendered when cover is defined
          covers.map((num, i) => (
            <div className="card" style={{ order: orderValue[i] }} onClick={() => setOrderValue(generateRandom())}>
              <img src={num?.artworkUrl100} />
              <div className="album-info">
                <div className="artist-name">{num?.artistName}</div>
                <div className="album-name">{num?.collectionName}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
