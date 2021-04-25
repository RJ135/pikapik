
import React from 'react'


const SearchPhotos = ({ searchPhotos, query, setQuery }) => {


    console.log("render Composant enfant SearchPhotos");


    return (
        <>
            <form className="form" onSubmit={searchPhotos} >
                <label className="label" htmlFor="query">
                    {" "}
          📷
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                />
            </form>

        </>
    )
}

export default React.memo(SearchPhotos)
