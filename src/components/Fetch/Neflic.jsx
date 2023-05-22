import { useState, useEffect } from 'react'
import './Nesflic.css'

const Nesflic = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const MI_KEY = "c9f04fa4";

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(response => response.json())
            .then(data => {
                setPeliculas(data.Search);
            })
            .catch(error => {
                console.log(error);
            })
    }, [busqueda])

  
    const handleSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = "";
    }

    return (
        <div>
            <h1>Nesflic</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='busqueda' />
                <button type='submit'> Buscar </button>
            </form>

            <ul>
                {
                    peliculas === undefined ? <h2>La película no esta disponible en nuestra base de datos</h2> : peliculas.map(peli => (<li key={peli.imdbID}> <img src={peli.Poster} /> {peli.Title} </li>))
                }
            </ul>
        </div>
    )
}

export default Nesflic