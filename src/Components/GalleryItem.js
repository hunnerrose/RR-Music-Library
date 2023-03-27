import { useState } from 'react'

function GalleryItem({song}) {
    const [isExpanded, setIsExpanded] = useState(false)
    

    const simpleStyle = {
        'width': '30%',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        /* 'display': 'inline-block',
        'align-items': 'center' */
    }

    const detailStyle = {
        'width': '100%',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2em',
        'backgroundImage': `url(${song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow',
        /* 'display': 'inline-block',
        'align-items': 'center' */
    }

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    const simpleView = (
        <div style={simpleStyle} onClick={handleClick}>
            <h3>{song.trackName}</h3>
            <h4>{song.collectionName}</h4>
        </div>
    )

    const detailView = (
        <div style={detailStyle} onClick={handleClick}>
            <h2>{song.trackName}</h2>
            <h3>{song.collectionName}</h3>
            <h4>{song.primaryGenreName}</h4>
            <h4>{song.releaseDate}</h4>
        </div>
    )

    return isExpanded ? detailView : simpleView
}

export default GalleryItem