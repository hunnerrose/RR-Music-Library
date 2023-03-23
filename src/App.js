import { useEffect, useState } from 'react'
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'

function App() {
  let [search, setSearch] = useState('The Grateful Dead')
  let [message, setMessage] = useState('Search for Music!')
      //instantiate the state value of 'data' as an empty array. We will plan for data to ultimately be an array of objects from the API return. So in order to prevent any type-based errors occuring, we should have the default value of that variable be the type that we intend on the data being.
  let [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${search}`) 
      .then(response => response.json())
      .then(({resultCount, results}) => {
        const successMessage = `Successfully fetched ${resultCount} result(s)!`
        const errorMessage = 'Not found'
        setMessage(resultCount ? successMessage : errorMessage)
        setData(results)
        console.log(results)
      })
  }, [search])

  return (
    <div>
      <SearchBar setSearch={setSearch}/>
      {message}
      <Gallery data={data}/>
    </div>
  );
}

export default App;

