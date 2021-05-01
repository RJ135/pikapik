import React from 'react'
import TopicTitle from './TopicTitle'
import Loader from './Loader'

const Gallery = ({ pics, totalPics, currentTopics }) => {
    /* console.log("render Enfant Gallery"); */

    return (
        <section className="gallery">
            <TopicTitle
                totalPics={totalPics}
                currentTopics={currentTopics}
            />
            <div className="card-list">
                {pics.map((pic) =>
                    <div className="card" key={pic.id}>
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.urls.small}
                        ></img>
                        <div className="card--description">
                            <a className="card--user" href={pic.user.links.portfolio}>{pic.user.name}</a>
                            <p className="card--likes">{pic.likes} ❤️</p>
                        </div>
                    </div>)
                }

            </div>
            <Loader />
        </section>
    )
}

export default Gallery
