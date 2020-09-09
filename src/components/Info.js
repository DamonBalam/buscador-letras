import React from 'react';

const Info = ({informacion}) => {
    if (Object.keys(informacion).length === 0) return null;
    const { strLastFMChart, strFacebook, strTwitter, strBiographyES,strArtistThumb} = informacion;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                    Información del Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artistass"/>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Info;
