import React, { memo } from 'react'
import loadable from '@loadable/component'

/* Code Splitting */
const TopicTitle = loadable(() => import('./TopicTitle'))
const Images = loadable(() => import('./Images'))

const Gallery = ({ descTopic, pics, totalPics, currentTopics }) => {
    /* console.log("render Enfant Gallery"); */

    return (
        <section className="gallery">
            <TopicTitle
                totalPics={totalPics}
                currentTopics={currentTopics}
                descTopic={descTopic}
            />
            <Images pics={pics} />
        </section>
    )
}

export default memo(Gallery)
