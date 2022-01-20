import React from "react";

import carousel1 from "../../utils/images/Carousel_1.png";
import carousel2 from "../../utils/images/Carousel_2.png";
import carousel3 from "../../utils/images/Carousel_3.png";

function New(props){
    return (
        <div className="new">
            <label>Conoce Más Aquí</label>
            <img className="new__img" src={props.value} alt="/"></img>
        </div>
    );
}

function News(){
    return (
        <div id="news-container">
            <h2 id="news-title">Conoce Las Últimas Noticias Y Novedades</h2>
            <div id="news">
                <button className="news__btn">&lt;</button>
                <New value={carousel1}/>
                <New value={carousel2}/>
                <New value={carousel3}/>
                <button className="news__btn">&gt;</button>
            </div>
        </div>
    );
}

export default News;