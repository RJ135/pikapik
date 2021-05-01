import React from 'react'
import '../style/Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <p>Loading</p>
            {/* <h1 className='loader'>Loading...</h1> */}
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
