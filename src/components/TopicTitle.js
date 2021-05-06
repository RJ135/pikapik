import React, { memo } from 'react'
import Loader from './Loader';

const TopicTitle = ({ descTopic, totalPics, currentTopics }) => {

    /* console.log("render Enfant TopicTitle"); */
    return (
        <section className="gallery--top">
            <div className="gallery--title--container">
                <h1 className='gallery--title'>{currentTopics ? currentTopics : <Loader />}</h1>
                <h2 className='gallery--total'> {totalPics ? totalPics : ''}</h2>
            </div>
            {descTopic && <small>{descTopic}</small>}
        </section>
    )
}

export default memo(TopicTitle)
