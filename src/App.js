import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Form from './components/Form';
import Lyrics from './components/Lyrics';
import Info from './components/Info';

function App() {

  const [lyricSearch,setLyricSearch] = useState({});
  const [lyric, setLyric] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    if(Object.keys(lyricSearch).length === 0) return;

    const requestApiLyric = async () => {
      const {artist, song} = lyricSearch;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      
      const [resultLyric, infomation] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ])

      setLyric(resultLyric.data.lyrics);
      setInfo(infomation.data.artists[0]);
    }
    requestApiLyric()
  },[lyricSearch, info]);

  return (
    <Fragment>
      <Form 
        setLyricSearch={setLyricSearch}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Lyrics 
              lyric={lyric}
            />            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
