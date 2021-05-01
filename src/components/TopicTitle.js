import React from 'react'

const TopicTitle = ({ totalPics, currentTopics }) => {
    /* console.log("render Enfant TopicTitle"); */
    return (
        <div className="gallery--top">
            <h1 className='gallery--title'>{currentTopics}</h1>
            <p>{totalPics ? totalPics : ''} </p>
        </div>
    )
}

export default TopicTitle
