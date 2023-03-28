import { useState, useEffect, useContext } from 'react'
import { SearchContext } from "../Context/SearchContext"

function SearchBar(props) {
    const [query, setQuery] = useState('')
    const {ref, fetchData} = useContext(SearchContext)

    /* const handleChange = (e) => {
        console.log(e.target.value)
        setQuery(ref.current.value)
    } */

    //This is to perform the search as we type
    /* useEffect(() => {
        setSearch(query)
    }, [query]) */

    const handleSubmit = (e) => {
        e.preventDefault()
            //prevent refreshing/sending our data to some random place

        //Look for some info to retrieve
            //Search for the query accessible by the "query" state variable
        //We need to provide 'query' to the app component
        // setSearch(query)
        fetchData(ref.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a search term here" ref={ref}/>
            <input type="submit"  />
        </form>
    )
}

export default SearchBar