import React, {Fragment} from 'react';

const Lyrics = ({lyric}) => {
    
    if(lyric.length === 0) return null;
    
    return ( 
        <Fragment>
            <h2>Letra Cancion</h2>
    <p className="letra">{lyric}</p>
        </Fragment>
     );
}
 
export default Lyrics;