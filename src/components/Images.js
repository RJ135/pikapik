import React, { memo } from 'react'

const Images = ({ pics }) => {
    return (
        <div className="card--list">
            {pics.map((pic) =>
                <div className="card" key={pic.id}>
                    <img
                        className="card--image"
                        alt={pic.alt_description ? pic.alt_description : `a picture of ${pic.user.name}`}
                        src={pic.urls.small}
                        width="283"
                        height="425"
                        loading="lazy"
                    />
                    <div className="card--description">
                        <a className="card--user" href={pic.user.links.portfolio}>{pic.user.name}</a>
                        <p className="card--likes">{pic.likes} ❤️</p>
                    </div>
                </div>)
            }
        </div>
    )
}

export default memo(Images)
