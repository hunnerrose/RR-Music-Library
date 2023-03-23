import GalleryItem from './GalleryItem'

function Gallery({data}) {
    let songs = data.filter((result) => result.kind === "song")

    return (
        <div>
            {songs.map((song) => <GalleryItem song={song}/>)}
        </div>
    )
}

export default Gallery