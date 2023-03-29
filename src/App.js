import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import AlbumView from './Components/AlbumView'
import ArtistView from './Components/ArtistView'
import { DataContext } from './Context/DataContext'


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
      })
  }, [search])

  return (
    <div>
        {message}
        <Router>
          <Routes>
            <Route path="/" element={
              <div className="gallery">
                <SearchBar setSearch={setSearch}/>
                <DataContext.Provider value={data}>
                  <Gallery/>
                </DataContext.Provider>
              </div>
            }/>
            <Route path="/album/:id" element={<AlbumView />} />
            <Route path="/artist/:id" element={<ArtistView />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

