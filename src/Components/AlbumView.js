//These components will be making separate API calls from the app to serve specific data within a given album

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function AlbumView() {
    const [albumData, setAlbumData] = useState([])
    const [songs, setSongs] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/song/${id}`)
            .then(response => response.json())
            .then(({results}) => {
                setAlbumData(results.shift())
                setSongs(results)
            })
    }, [id])

    return (
        <div>
            <Link to="/"><button> Home </button></Link>
            <h1>{albumData.collectionName}</h1>
            <img src={albumData.artworkUrl100} alt="Album Art"></img>
            <Link to={`/artist/${albumData.artistId}`}>
                <h2>{albumData.artistName}</h2>
            </Link>
            <h2>{albumData.primaryGenreName}</h2>
            <ul>
                {songs.map((song) => {
                    console.log(song)
                    return <li>
                            {song.trackName}
                        </li>
                })}
            </ul>
        </div>
    )
}

export default AlbumView

//get list of songs