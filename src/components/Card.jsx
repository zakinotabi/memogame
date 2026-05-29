// import {react.svg} from "./assets/react.svg"
// https://itunes.apple.com/search?term=drake+iceman&media=music&entity=album&limit=1
// data.results[0].artistName
// data.results[0].collectionName
// data.results[0].artworkUrl100

import { useEffect, useState } from 'react';
import album from '../utils/itunesApi';
import albumIds from '../utils/albumIds';

function Card() {
  const [covers, setCovers] = useState();

  console.log(covers);

  useEffect(() => {
    (async () => {
      const Ids = albumIds();
      const albumPromises = Ids.map((id) => album(id));
      const musicData = await Promise.all(albumPromises);
      const results = musicData.map((each) => each.results[0]);

      setCovers(results);
    })();
  }, []);

  return (
    <div>
      <h2>Music Results</h2>

      {covers &&
        // only rendered when cover is defined
        covers.map((num) => (
          <div className="card">
            <h3>{num?.artistName}</h3>
            <img src={num?.artworkUrl100} />
            <p>{num?.collectionName}</p>
          </div>
        ))}
    </div>
  );
}

export default Card;
