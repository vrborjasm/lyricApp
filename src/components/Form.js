import React, {useState} from 'react';
import Error from './Error';

const Form = ({setLyricSearch}) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const [error, setError] = useState(false);

    const {artist, song} = search;

    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === '' ) {
            setError(true);
            return;
        }

        setError(false);
        setLyricSearch(search);
    }

    return ( 
        <div className="bg-info">
            { error ? <Error message="Todos los campos son obligatorios" /> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de Canciones</legend>
                        
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre del Artista"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre de la cancion"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;