import React, { useState } from 'react'


const SearchPhotos = ({ unsplash }) => {

    const [query, setQuery] = useState("")
    const [pics, setPics] = useState([]);
    /* const [topics, setTopics] = useState([]); */

    /* useEffect(() => {
        unsplash.topics.list({
            page: 1,
            perPage: 10,
        })
            .then(res => { setTopics(res.response.results); })
    }, []) */

    const searchPhotos = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
        unsplash.search.getPhotos({
            query: query,
            page: 1,
            perPage: 10,
        })
            .then(res => { setPics(res.response.results) })
    };


    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
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
                />
                <button type="submit" className="button">
                    Search
                </button>
            </form>

            {/* <div>
                {topics.map((topic) => {
                    return <a href="/" key={topic.id} > {topic.title} </a>
                })}
            </div> */}

            <div className="card-list">
                {pics.map((pic) =>
                    <div className="card" key={pic.id}>
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.urls.full}
                            width="50%"
                            height="50%"
                        ></img>
                    </div>)}
            </div>
        </>
    )
}

export default SearchPhotos
