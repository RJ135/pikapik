import React from 'react'


const Gallery = ({ pics, currentTopics, totalPics }) => {
    console.log("render Composant enfant Gallery");

    return (
        <section className="gallery">
            <div className="gallery--top">
                <h1 className='gallery--title'>{currentTopics}</h1>
                <p> {totalPics}</p>
            </div>


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
                            <p className="card--likes">❤️ {pic.likes}</p>
                        </div>
                    </div>)
                }


            </div>
        </section>
    )
}

export default React.memo(Gallery)
