import React from "react";

function Post() {
    return (<div className='publication'>
        <img className='publication-img' src={' '} alt='' />
        <h3 className='publication-h3'>Titulo</h3>
        <p className='publication-description'>Description</p>
    </div>);
}

function Posts() {
    return (
        <div className='boardPublication'>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;