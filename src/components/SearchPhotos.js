
import React, { useCallback, useMemo } from 'react'

const SearchPhotos = ({ searchPhotos, setQuery, query }) => {

    /* console.log("render Enfant SearchPhotos"); */

    const handleQuery = useMemo(() => (query), [query])

    const handleChange = useCallback(
        (event) => {
            const testInput = event.target.value
            setQuery(testInput)
        },
        [setQuery],
    )

    const handleSubmit = useCallback(
        (e) => {
            searchPhotos(e)
        },
        [searchPhotos],
    )


    return (
        <>
            <form className="form" onSubmit={handleSubmit} >
                <label className="label" htmlFor="query">
                    {''}
                📷
                </label>
                <input
                    type="search"
                    name="query"
                    value={handleQuery}
                    className="input-search"
                    placeholder={`Try "dog" or "apple"`}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </form>

        </>
    )
}

export default SearchPhotos
