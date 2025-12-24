

import React, { useState } from "react";
import "../../styles/Tarjeta.css";

import deadpool from "../../img/Deadpool.jpg";
import fondo2 from "../../img/fondo2.jpg";
import oso from "../../img/oso.jpg";
import spiderman from "../../img/spiderman.jpg"
import kitty from "../../img/Kitty.jpg"
import asdf from "../../img/asdf.jpg"

export default function Tarjeta() {

  // 👉 Estado que guarda la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="page-center">
      <div className="layout">

        {/* RECUADRO GRANDE (izquierda) */}
        <div className="left-box">

          {selectedImage ? (
            <div className="big-content">
              <img src={selectedImage} className="big-image" />
              {/* RECUADRO BLANCO EXTRA */}
              <div className="big-side-box"></div>


              
            </div>
          ) : (
            <p className="placeholder">Haz click en una imagen →</p>
          )}

        </div>

        {/* RECUADROS PEQUEÑOS DERECHA */}
        <div className="right-section">
          <div className="top-row">

            <img className="box top" src={spiderman}
              onClick={() => setSelectedImage(spiderman)} />

            <img className="box top" src={asdf}
              onClick={() => setSelectedImage(asdf)} />

            <img className="box top" src={kitty}
              onClick={() => setSelectedImage(kitty)} />

            <img className="box top" src={oso}
              onClick={() => setSelectedImage(oso)} />

          </div>


          {/* RESTO DEL LAYOUT… */}
          <div className="middle-row">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="bottom-row">
            <div className="box small"></div>
            <div className="box small"></div>
            <div className="box small"></div>
            <div className="box small"></div>
            <div className="box small"></div>
            <div className="box small"></div>
            <div className="box small"></div>
            <div className="box small"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

