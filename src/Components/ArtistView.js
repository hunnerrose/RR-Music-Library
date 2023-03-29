//These components will be making separate API calls from the app component to serve specific data about our artist

import {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const [ albums, setAlbums ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/album/${id}`)
            .then(response => response.json())
            .then(({results}) => {
                setArtistData(results.shift())
                setAlbums(results)
            })
    }, [id])


    return (
        <div>
            <Link to="/"><button> Home </button></Link>
            <h1>{artistData.artistName}</h1>
            <h2>{artistData.primaryGenreName}</h2>
            <ul>
                {albums.map((album) => {
                    console.log(album)
                    return <li>
                        <Link to={`/album/${album.collectionId}`}>
                            {album.collectionName}
                        </Link>   
                        </li>
                })}
            </ul>
        </div>
    )
}

export default ArtistView