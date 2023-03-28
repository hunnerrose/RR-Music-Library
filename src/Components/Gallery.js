import GalleryItem from './GalleryItem'

function Gallery({data}) {
    // let songs = data.filter((result) => result.kind === "song")
    const songs = data.filter((result) => result.kind === "song")

    return (
        <div className='gallery'>
            {songs.map((song) => <GalleryItem song={song} key={song.trackId} />)}
        </div>
    )
}

export default Gallery