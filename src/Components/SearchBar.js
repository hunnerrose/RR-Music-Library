import { useState, useEffect } from 'react'

function SearchBar({setSearch}) {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    //This is to perform the search as we type
    useEffect(() => {
        setSearch(query)
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()
            //prevent refreshing/sending our data to some random place

        //Look for some info to retrieve
            //Search for the query accessible by the "query" state variable
        //We need to provide 'query' to the app component
        setSearch(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}  placeholder="Enter a search term here" />
            <input type="submit"  />
        </form>
    )
}

export default SearchBar