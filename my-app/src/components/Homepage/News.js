import React from "react";

function New(){
    return (
        <div className="new">
            <label>Conoce Más Aquí</label>
            <img src="/" alt="/"></img>
        </div>
    );
}

function News(){
    return (
        <div className="news-container">
            <h2>Conoce Las Últimas Noticias Y Novedades</h2>
            <button>r</button>
            <div className="news">
                <New />
                <New />
                <New />
            </div>
            <button>r</button>
        </div>
    );
}

export default News;