import React from 'react'
import Loader from './Loader';

const TopicTitle = ({ descTopic, totalPics, currentTopics }) => {

    console.log(descTopic);

    /* console.log("render Enfant TopicTitle"); */
    return (
        <div className="gallery--top">
            <div>
                <h1 className='gallery--title'>{currentTopics ? currentTopics : <Loader />}</h1>
                < small > {totalPics ? totalPics : ''}</small>
            </div>
            <p> </p>
            <p>{descTopic}</p>
        </div>
    )
}

export default TopicTitle
