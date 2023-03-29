import GalleryItem from './GalleryItem'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'

function Gallery(props) {
    // let songs = data.filter((result) => result.kind === "song")
    const data = useContext(DataContext)
    const songs = data.filter((result) => result.kind === "song")

    return (
        <div className='gallery'>
            {songs.map((song) => <GalleryItem song={song} key={song.trackId} />)}
        </div>
    )
}

export default Gallery