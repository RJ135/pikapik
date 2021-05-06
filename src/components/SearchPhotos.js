
import React, { useCallback, useMemo, memo } from 'react'
import loadable from '@loadable/component'
const SearchInput = loadable(() => import('./SearchInput'));

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
                <SearchInput
                    handleQuery={handleQuery}
                    handleChange={handleChange}

                />
            </form>
        </>
    )
}

export default memo(SearchPhotos)
