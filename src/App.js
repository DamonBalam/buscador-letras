import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from "./components/Cancion";
import Info from "./components/Info";

function App() {
    // definir state
    const [busquedaLetra, setBusquedaLetra] = useState({});
    const [resultadoLetra, setResultadoLetra] = useState('')
    const [informacion, setInformacion] = useState({});

    useEffect(() => {
        if (Object.keys(busquedaLetra).length === 0) return;
        const consultarAPILetra = async () => {
            const url = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
            const urlInfo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`;

            const [letra, informacion] = await Promise.all(
                [
                    axios.get(url),
                    axios.get(urlInfo),
                ]
            )
            setResultadoLetra(letra.data.lyrics);
            setInformacion(informacion.data.artists[0]);
        }
        consultarAPILetra();
    }, [busquedaLetra])
    return (
        <Fragment>
            <Formulario setBusquedaLetra={setBusquedaLetra}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Info informacion={informacion}/>
                    </div>
                    <div className="col-md-6">
                        <Cancion letra={resultadoLetra}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
