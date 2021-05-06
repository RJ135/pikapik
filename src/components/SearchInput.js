import React from 'react'

const SearchInput = ({ handleQuery, handleChange }) => {
    return (
        <>
            <input
                type="search"
                name="query"
                value={handleQuery}
                className="input-search"
                placeholder={`Try "dog" or "apple"`}
                onChange={handleChange}
                autoComplete="off"
            />
        </>
    )
}

export default SearchInput
