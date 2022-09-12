import React from 'react'
import "./Home.scss"

export default function Home (){

    return(
        <div className="all-home-container">
            <div className="img-title-btn-home">
                <img src="https://we-are.com.ar/assets/img/introduction-visual.png" className="img-home"/>
                <div className="frase-y-btn-container">
                    <h1 className="home-frase">ACA VA UNA FRASE DE BIM</h1>
                    <button className="home-contact-btn"><span className="span-btn-home"></span>➜Contactanos</button>
                </div>
            </div>
            <div className="all-titulo-subtitulo-container">
                <div className="titulo-sub-container">
                    <h1>Aca va un titulo</h1>
                    <h3>Aca van cositasAca van cositasAca van cositas</h3>
                </div>
                <div className="titulo-sub-container">
                    <h1>Aca va un titulo</h1>
                    <h3>Aca van cositasAca van cositasAca van cositas</h3>
                </div>
                <div className="titulo-sub-container">
                    <h1>Aca va un titulo</h1>
                    <h3>Aca van cositasAca van cositasAca van cositas</h3>
                </div>
            </div>
        </div>
    )
}