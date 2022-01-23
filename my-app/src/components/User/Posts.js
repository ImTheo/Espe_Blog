import React from "react";

import imgPort from "../../utils/images/gris.jpg"

function Post(props) {
    return (<div className='publication'>
        <img id='publication__img' src={props.value} alt='' />
        <h3 id='publication__h3'>Titulo</h3>
        <p id='publication__description'>Description</p>
    </div>);
}

function Posts() {

    return (
        <div id='board-publication'>
            <Post value={imgPort}/>
            <Post value={imgPort}/>
            <Post value={imgPort}/>
            <Post value={imgPort}/>
        </div>
    );
}

export default Posts;