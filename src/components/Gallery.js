import React from 'react'

const Gallery = ({ pics }) => {
    return (
        <>
            <h1>Gallery</h1>
            <div className="card-list">
                {pics.map((pic) =>
                    <div className="card" key={pic.id}>
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.urls.small}
                        ></img>
                        <div className="description">
                            <p>{pic.user.name}</p>
                            <a className="portfolio" href={pic.user.links.portfolio}>See on Unsplash</a>
                        </div>

                    </div>)}
            </div>
        </>
    )
}

export default Gallery
